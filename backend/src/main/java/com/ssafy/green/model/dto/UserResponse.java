package com.ssafy.green.model.dto;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class UserResponse {
    private String userId;
    private String nickname;
    private String profile;
    private String thema;
}
