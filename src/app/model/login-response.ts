
export class LoginResponse {
    httpStatus?: string;
    message?: string;
    data?: Data;
}

export class Data {
    responseCode?: number;
    result?: Result;
    vtoken?: string;
    token?: string;
}

export class Result {
    entityDetails?: EntityDetails;
    loginDetails?: LoginDetails;
    tokenDetails?: TokenDetails;
}

export class EntityDetails {
    entityIdentity?: EntityIdentity;
    tradingAccountNumber?: string;
}

export class EntityIdentity {
    entityIdType?: number;
    entityId?: string;
}

export class LoginDetails {
    invalidLoginCount?: number;
    lastLoginTime?: string;
    lastLogoffTime?: string;
}

export class TokenDetails {
    accessToken?: string;
    expiresIn?: number;
    refreshToken?: string;
}
