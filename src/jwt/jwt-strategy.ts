import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import * as jwksClient from 'jwks-rsa';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKeyProvider: async (req, rawJwtToken, done) => {
        try {
          const client = jwksClient({
            jwksUri:
              'https://dev-cb23ygb7b1442qt3.eu.auth0.com/.well-known/jwks.json',
          });

          const decoded = JSON.parse(
            Buffer.from(rawJwtToken.split('.')[0], 'base64').toString(),
          );

          const key = await client.getSigningKey(decoded.kid);

          done(null, key.getPublicKey());
        } catch (err) {
          done(err, null);
        }
      },
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.sub,
      username: payload.username || 'Unknown',
    };
  }
}
