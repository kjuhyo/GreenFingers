package com.ssafy.green.model.dto;

import com.ssafy.green.model.entity.Room;
import com.ssafy.green.model.entity.plant.PlantCare;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class RoomResponse {

    private Long id;
    private String roomName;
    private List<plantResponse> plants = new ArrayList<>();

    public static RoomResponse create(Room r) {
        RoomResponse response = new RoomResponse();
        response.id = r.getId();
        response.setRoomName(r.getRoomName());

        // 해당 방에 존재하는 식물 정보 매칭!
        if(r.getPlantCares()!=null){
            for (PlantCare p : r.getPlantCares()){
                plantResponse.create(p);
            }
        }
        return response;
    }
}
