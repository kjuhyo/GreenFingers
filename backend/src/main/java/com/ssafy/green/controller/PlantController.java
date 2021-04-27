package com.ssafy.green.controller;

import com.ssafy.green.model.dto.plant.MyPlantRequest;
import com.ssafy.green.model.dto.plant.PlantListResponse;
import com.ssafy.green.model.dto.plant.PlantResponse;
import com.ssafy.green.service.PlantService;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/plant")
@CrossOrigin("*")
public class PlantController {

    @Autowired
    private PlantService plantService;

    // 식물 학명 또는 이름 조회
    @ApiOperation(value = "식물 학명 또는 이름 조회", notes = "[category] 0: 학명으로 조회, 1: 이름으로 조회 & "+
                                                        "[search] 검색할 키워드")
    @GetMapping("/info/{category}/{search}")
    public List<PlantListResponse> findAllByCommonAndName(@PathVariable int category, @PathVariable String search) {
        List<PlantListResponse> list = null;
       if(category == 0) list = plantService.findAllByCommon(search);
       else if (category == 1) list = plantService.findAllByName(search);
       return list;
    }

    // 식물 상세 정보 조회
    @ApiOperation(value = "식물 상세 정보 조회", notes = "")
    @GetMapping("/info/{id}")
    public PlantResponse findByPlantInfo(@PathVariable Long id) {
        return plantService.findByPlantInfo(id);
    }

    // 식물 등록
    @ApiOperation(value = "식물 등록 ", notes = "")
    @PostMapping("/care")
    public Long save(@RequestBody MyPlantRequest myPlantRequest) { return plantService.save(myPlantRequest); }
}
