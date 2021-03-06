# billet

https://billet.firebaseapp.com

No account creation, no login, no email validation... Just follow the link above, create a shopping / TODO list and share it with everybody !  

This project is also a POC using Firebase, a platform for easily build backend of web applications.

## Firebase

https://www.firebase.com/

### Security rules

Following Firebase rules are applied to the model : 

```
{
    "rules": {  
      
      ".read": false,
      ".write": false,
      
      "lists": {
        ".read": false,
        ".write": true,
       
       "$list": {
          ".read": true,
          ".write": true           
       }
      }
    }     
}
```
Imply following restrictions : 

| method | URI | restriction |
| --- | --- | --- |
| GET | / | not allowed |
| GET | /lists | not allowed |
| GET | /lists/:listId | allowed |
| POST | /lists | allowed |

### No authentication  

Data privacy is guaranteed, even without any user authentication. 
Indeed, list id has to be known to have an access. 

## Credits

### favicon

Icons made by <a href="http://www.flaticon.com/authors/stephen-hutchings" title="Stephen Hutchings">Stephen Hutchings</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a>             is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>



