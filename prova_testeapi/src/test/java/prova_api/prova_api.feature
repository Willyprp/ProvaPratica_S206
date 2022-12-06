Feature: Testando API Go REST


Background: Executa antes de cada teste
    * def url_gorest = 'https://gorest.co.in/'
    * def url_poke = 'https://pokeapi.co/api/v2'

Scenario: Testando se possui algum usuario inativo.
    Given url url_gorest
    And path 'public/v2/users'
    When method get
    Then status 200
    And match response[*].status contains "inactive"

Scenario: Testando se é possível usar o método POST sem ter um Acess Token.
    Given url url_gorest
    And path 'public/v2/users'
    When method POST
    Then status 401

Scenario: Testando se na página 10 possui um usuário feminino.
    Given url url_gorest
    And path 'public/v2/users?page=10'
    When method get
    Then status 200
    And match response[*].gender contains "female"  

Scenario: Testando se o pokemon Lucario possui mais de 1 tipo e se um deles é lutador.
    Given url url_poke
    And path 'pokemon/lucario'
    When method get
    Then status 200
    And assert karate.sizeOf(response.types) > 1
    And match response.types[*].type.name contains "fighting"  

Scenario: Testando se a fruta Grepa possui um sabor doce.
    Given url url_poke
    And path 'berry/grepa'
    When method get
    Then status 200
    And match response.flavors[*].flavor.name contains "sweet"

Scenario: Testando se existe uma fruta chamada laranja.
    Given url url_poke
    And path 'berry/laranja'
    When method get
    Then status 404

Scenario: Testando se o pokemon Dratini possui uma hidden ability.
    Given url url_poke
    And path 'pokemon/dratini'
    When method get
    Then status 200
    And match response.abilities[*].is_hidden contains true

Scenario: Testando se o pokemon Squirtle possui o id 7.
    Given url url_poke
    And path 'pokemon/squirtle'
    When method get
    Then status 200
    And match response.id == 7



