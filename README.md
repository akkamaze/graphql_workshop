# Simplest Demo GraphQL with Hello World API
Simple API project with GraphQL.
## Step to use
assume you have standard program about `nodejs` and `git`
1. clone this project with command: 
```git
git clone https://github.com/ChimengSoso/demo_graphql_helloworld.git
```
2. install dependencies with command:
```node
npm install
```
3. this project is server-program. to run server use command:
```node
npm start
```
4. open the browser and go to `http://localhost:4000/`. <br>
   this is the service of `query`/`mutation` in `GraphQL` syntax.
5. Let join.

## Example Query
the schema:
```graphql
type Query {
  hello(name: String): String!
  sayhi: String!
}

type Mutation {
  changeDefaultName(name: String!): String!
}

type Subscription {
  updateName: String!
}
```
The Request and Response show in below table.
<table>
<tr>
  <th> No. </th>
  <th align ="left"> Query / Mutaion </th>
  <th align ="left"> Result </th>
</tr>
<tr>
  <td> 01 </td>
  <td> 
    
```graphql
query {
  hello
}
```
</td>
<td> 

```json
{
  "data": {
    "hello": "Hello World from Chi!"
  }
}
```
</td>
</tr>
<tr>
  <td> 02 </td>
<td>
    
```graphql    
query {
  hello(name: "API")
}
```
</td>
<td>
    
```json
{
  "data": {
    "hello": "Hello World from API!"
  }
}
```   
</td>
</tr>
  
<tr>
  <td> 03 </td>
<td>
    
```graphql    
query {
  sayhi
}
```
</td>
<td>
    
```json
{
  "data": {
    "sayhi": "Hi API from graphQL"
  }
}
```   
</td>
</tr>


<tr>
  <td> 04 </td>
<td>
    
```graphql    
query {
  sayhi(name: "A")
}
```
</td>
<td>
    
```json
{
  "error": {
    "errors": [
      {
        "message": "Unknown argument \"name\" on field \"sayhi\" of type \"Query\".",
        "locations": [
          {
            "line": 2,
            "column": 9
          }
        ]
      }
    ]
  }
}
```   
</td>
</tr>
  
  
<tr>
  <td> 05 </td>
<td>
    
```graphql    
mutation {
  changeDefaultName(name: "ABC")
}
```
</td>
<td>
    
```json
{
  "data": {
    "changeDefaultName": "Ok change the default name to ABC"
  }
}
```   
</td>
</tr>
  
  
<tr>
  <td> 06 </td>
<td>
    
```graphql    
query {
  hello
}
```
</td>
<td>
    
```json
{
  "data": {
    "hello": "Hello World from ABC!"
  }
}
```   
</td>
</tr>
  
  <tr>
  <td> 07 </td>
<td>
    
```graphql    
subscription {
  updateName
}
```
</td>
<td>
    
```text
nothing show it's waiting...
```   
</td>
</tr>
  
<tr>
  <td> 08 </td>
<td>
    
```graphql    
mutation {
  changeDefaultName(name: "CodeMeng")
}
```
</td>
<td>
    
```text
{
  "data": {
    "changeDefaultName": "Ok change the default name to CodeMeng"
  }
}
```   
</td>
</tr>
  
  
<tr>
  <td> 09 </td>
<td>
    
```text    
when back to see the subscription request
```
</td>
<td>
    
```text
{
  "data": {
    "updateName": "Notify Update Default Name to CodeMeng"
  }
}
```   
</td>
</tr>
</table>

# for more detail
> see in [CodeMeng](https://www.youtube.com/channel/UC9GH5OL2YrdtI--py1hDoaQ).
