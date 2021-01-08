package com.virgingames.testsuite;

import com.virgingames.testbase.TestBase;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import net.thucydides.core.annotations.Title;
import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;

import static io.restassured.RestAssured.given;

public class MultiTest extends TestBase {
    // Check Default Game Frequency is 300000
    @Title("Verify Default Game Frequency is 300000")
    @Test
    public void verifyGameFrequency() {
        Response rep = given()
                .when()
                .get("/GetBingoLobbyFeed.do");
        rep.then().log().all().statusCode(200);

        String json = rep.asString();
        JsonPath jp = new JsonPath(json);

        ArrayList<String> stream = jp.getJsonObject("bingoLobbyInfoResource.streams");
        System.out.println("Size of Stream = " + stream.size());


        for (int i = 0; i < stream.size(); i--) {
            String a = "bingoLobbyInfoResource.streams[";
            String b = "].defaultGameFrequency";

            int default_GF = jp.get(a + i + b);
            System.out.println("Default Game Frequency = " + default_GF);

            Assert.assertTrue(default_GF == 300000);
        }
    }

    @Title("Verify Start Time is Greater than Future Time")
    @Test
    public void verityStratTime() {

        Response rep = given()
                .when()
                .get("/GetBingoLobbyFeed.do");

        String json = rep.asString();
        JsonPath jp = new JsonPath(json);

        ArrayList<String> stream = jp.getJsonObject("bingoLobbyInfoResource.streams");

        for (int i = 0; i < stream.size(); i++) {
            String a = "bingoLobbyInfoResource.streams[";
            String b = "].startTime";

            Long systemTime = System.currentTimeMillis();
            Long startTime = jp.get(a + i + b);

            Assert.assertTrue(systemTime < startTime);
        }
    }
}
