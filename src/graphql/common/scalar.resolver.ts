import {
  DateResolver,
  DateTimeResolver,
  EmailAddressResolver,
  JWTResolver,
  LatitudeResolver,
  LongitudeResolver,
  NonEmptyStringResolver,
  URLResolver,
  UUIDResolver,
} from 'graphql-scalars'

export const Date = DateResolver
export const DateTime = DateTimeResolver
export const EmailAddress = EmailAddressResolver
export const JWT = JWTResolver
export const Latitude = LatitudeResolver
export const Longitude = LongitudeResolver
export const NonEmptyString = NonEmptyStringResolver
export const URL = URLResolver
export const UUID = UUIDResolver
