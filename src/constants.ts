export enum Inputs {
    Key = "key",
    Path = "path",
    RestoreKeys = "restore-keys",
    UploadChunkSize = "upload-chunk-size",
    AWSS3Bucket = "aws-s3-bucket",
    AWSRegion = "aws-region"
}

export enum Outputs {
    CacheHit = "cache-hit"
}

export enum State {
    CachePrimaryKey = "CACHE_KEY",
    CacheMatchedKey = "CACHE_RESULT"
}

export enum Events {
    Key = "GITHUB_EVENT_NAME",
    Push = "push",
    PullRequest = "pull_request"
}

export const RefKey = "GITHUB_REF";
