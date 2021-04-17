package com.ssafy.green.controller;

//import java.io.File;
//import java.io.FileInputStream;
//import java.io.InputStream;
//import java.io.OutputStream;
//import java.net.HttpURLConnection;
//import java.net.URL;
//import java.util.Base64;
//import org.json.JSONArray;
//import org.json.JSONObject;
import com.ssafy.green.service.PlantService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/plant")
@CrossOrigin("*")
public class PlantController {

    @Autowired
    private PlantService plantService;
}
