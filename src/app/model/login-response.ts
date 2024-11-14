
export class LoginResponse {
    httpStatus?: string;
    message?: string;
    data?: Data;
}

class Data {
    responseCode?: number;
    result?: Result;
    vtoken?: string;
    token?: string;
}

class Result {
    entityDetails?: EntityDetails;
    loginDetails?: LoginDetails;
    tokenDetails?: TokenDetails;
}

class EntityDetails {
    entityIdentity?: EntityIdentity;
    tradingAccountNumber?: string;
}

class EntityIdentity {
    entityIdType?: number;
    entityId?: string;
}

class LoginDetails {
    invalidLoginCount?: number;
    lastLoginTime?: string;
    lastLogoffTime?: string;
}

class TokenDetails {
    accessToken?: string;
    expiresIn?: number;
    refreshToken?: string;
}
