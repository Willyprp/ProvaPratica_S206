package prova_api;

import com.intuit.karate.junit5.Karate;

public class ProvaRunner {
    @Karate.Test
    Karate testProjeto() {
        return Karate.run("prova_api").relativeTo(getClass());
    } 
}
