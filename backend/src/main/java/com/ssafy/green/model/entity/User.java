package com.ssafy.green.model.entity;

import com.ssafy.green.model.dto.UserInfoDto;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Getter
@ToString
public class User implements UserDetails {

    @Id @GeneratedValue
    @Column(name = "uid")
    private Long id;

    private String userId;
    private String password;
    private String nickname;
    private String profile;
    private UserType provider;
    private String providerId;

    @OneToMany(mappedBy = "user")
    private List<Diary> diarys = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Room> rooms = new ArrayList<>();

    @Column(name = "uflag", columnDefinition = "boolean default true")
    private Boolean flag = true;


    public User() {}
    @Builder
    public User(String userId, String password, String nickname, String profile, UserType provider, String providerId) {
        this.userId = userId;
        this.password = password;
        this.nickname = nickname;
        this.profile = profile;
        this.provider = provider;
        this.providerId = providerId;
    }

    /**
     * 유저 정보 수정
     */
    public void updateInfo(UserInfoDto userInfo) {
        this.password = userInfo.getPassword();
        this.nickname = userInfo.getNickname();
        this.profile = userInfo.getProfile();
    }

    /**
     * 유저 정보 삭제
     */
    public void delete() {
        this.flag = false;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        ArrayList<GrantedAuthority> auth = new ArrayList<GrantedAuthority>();
        auth.add(new SimpleGrantedAuthority("USER"));
        return auth;
    }

    @Override
    public String getUsername() {
        return this.userId;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
