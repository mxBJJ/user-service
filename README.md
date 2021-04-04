# user-service

## Descrição

O serviço tem como objetivo, executar as seguintes funcionalidades: 
  * Registro de usuários
  * Login de usuários
  * Gerar token (JWT), que irá proteger determinadas rotas da aplicação
  
 Ao registrar um usuário, será gerado um token. Este token será utilizado para acessar à rotas protegidas dentro da aplicação. O serviço está sendo 
 utilizado de forma que fique desacoplado do fluxo da aplicação, ou seja, caso o serviço de registro e login esteja fora do ar, os usuários ainda poderão
 consultar os produtos disponíveis.
 
 
## Rotas

* POST: 
  
  localhost:3000/cadastrar
  
  ` Request: `
  
  ```json 
  
    {
      "name": "string",
      "email": "string",
      "password": "string",
      "phone": "string"
  }
  
  ```
  
    ` Response: `
  
  ```json 
  {
      "user": {
        "products": [],
        "_id": "string",
        "name": "string",
        "email": "string",
        "phone": "string",
        "createdAt": "date",
        "__v": "number"
    },
      "token": "string"
  }
  
  ```
  
* POST: 
  
  localhost:3000/login
  
    ` Request: `
  
  ```json
  
  {
      "email": "string",
      "password": "string"
  }
  
  ```
  
    ` Response: `
    
    ```json
    
  {
        "user": {
          "products": [],
          "_id": "string",
          "name": "string",
          "email": "string",
          "phone": "string",
          "createdAt": "date",
          "__v": "number"
        },
        "token": "string"
   }
   
   ```
