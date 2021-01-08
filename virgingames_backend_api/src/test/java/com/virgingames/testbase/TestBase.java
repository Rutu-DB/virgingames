package com.virgingames.testbase;

import com.virgingames.utils.PropertyReader;
import io.restassured.RestAssured;
import org.junit.BeforeClass;

public class TestBase {

    public static PropertyReader propertyReader;

    @BeforeClass
    public static void inIt() {
        RestAssured.baseURI = "https://www.virgingames.com";
        RestAssured.basePath = "/bingo";
        //propertyReader = PropertyReader.getInstance();
        //RestAssured.baseURI = propertyReader.getProperty("baseUrl");
        // RestAssured.port = Integer.parseInt(propertyReader.getProperty("port"));
        // RestAssured.basePath = Path.BINGO;
    }
}
