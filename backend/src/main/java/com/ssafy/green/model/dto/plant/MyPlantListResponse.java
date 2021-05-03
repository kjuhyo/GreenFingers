package com.ssafy.green.model.dto.plant;

import com.ssafy.green.model.entity.plant.PlantCare;
import lombok.Data;

@Data
public class MyPlantListResponse {
    private Long pid;
    private String nickname;
    private String name;
    private String lastDate;
    private String image;

    public MyPlantListResponse(PlantCare entity) {
        this.pid = entity.getId();
        this.name = entity.getName();
        this.nickname = entity.getNickname();
        this.lastDate = entity.getLastDate();
        this.image =entity.getImage();
    }
}
