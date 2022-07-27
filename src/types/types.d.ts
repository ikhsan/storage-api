import { RequestGenericInterface } from 'fastify'
import { FromSchema } from 'json-schema-to-ts'
import { Readable } from 'stream'
import { bucketSchema } from '../schemas/bucket'
import { objectSchema } from '../schemas/object'

export type Bucket = FromSchema<typeof bucketSchema>
export type Obj = FromSchema<typeof objectSchema>

export type SignedToken = {
  url: string
  contentDisposition?: string
  contentType?: string
}

export interface AuthenticatedRequest extends RequestGenericInterface {
  Headers: {
    authorization: string
  }
}
export interface AuthenticatedRangeRequest extends RequestGenericInterface {
  Headers: {
    authorization: string
    range?: string
  }
}
type PostgrestError = {
  message: string
  details: string
  hint: string
  code: string
}

type StorageError = {
  statusCode: string
  error: string
  message: string
}

type ObjectResponse = {
  metadata: ObjectMetadata
  body?: ReadableStream<any> | Readable | Blob | Buffer
}

type ObjectMetadata = {
  cacheControl?: string
  contentLength?: number
  contentRange?: string
  contentDisposition?: string
  contentEncoding?: string
  contentLanguage?: string
  size?: number
  mimetype?: string
  lastModified?: Date
  eTag?: string
  httpStatusCode?: number
}
