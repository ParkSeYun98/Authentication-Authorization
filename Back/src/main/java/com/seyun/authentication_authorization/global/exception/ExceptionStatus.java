package com.seyun.authentication_authorization.global.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ExceptionStatus {

    /**
     * code : 예외 코드 (4자리, 맨앞자리는 HTTP 상태코드를 따라감)
     * message : 예외 메시지
     */

    /* 예시 */
    EXCEPTION(-9999, "예외가 발생하였습니다.");

    private final int code;
    private final String message;
}
