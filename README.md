# Git450
- Fullname: Ibukunoluwa Soyebo 
- StudentID: 9145126302

## What I've done
* I built a simplified and miniature version of Github with socket programming in C language. Following the instructions from my EE450 project for Fall 2024, I developed a suite of socket programs that support read, write, delete and deployment functionality for a simplified version control system. The software allows two sets of User: Members and Guests, to lookup saved files, commit files, delete files and deploy files among different servers. 
* Communication between the client and server is facilitated via TCP, which supports multiple connections at once via child sockets. It also guarantees accurate delivery of messages between both parties
* Communication between servers is facilitated via UDP, which guarantees speedy delivery of the messages

## What are my files and what do they do?
- **client.c:** Sets up connection to Server M and manages member and guest functionalities
- **serverM.c:** Serves as a medium between client and the servers where various functions are executed
- **serverR.c:** Executes the lookup, remove and push functionalities and sends the result to serverM
- **serverD.c:** Executes the deploy functionality and sends the result to serverM
- **serverA.c:** Executes the authentication functionality and sends the result to serverM
- **client.h:** Holds constants used by client.c
- **serverM.h:** Holds constants used by serverM.c
- **serverR.h:** Holds constants used by serverR.c
- **serverD.h:** Holds constants used by serverD.c
- **serverA.h:** Holds constants used by serverA.c

## Format of Messages Exchanged
- All on-screen messages stated in the project description file were strictly adhered to and implemented
- Certain error messages are printed out for the client login in the event a user does not include a username or password or more than 2 parameters
- For the **REMOVE** request, if the requested filename is not specified, an error "filename is not specified" is printed out on the client side
- For the **REMOVE** request, if the requested filename does not exist in the user's repository then "<filename> does not exist" is printed on the client side
- For the **DEPLOY** request, if the member's repository is empty, an empty lookup message is printed on the client side 

## Conditions under which the project could fail
- Uppercase commands would potentially fail as I did not handle uppercase commands of any form.

## Reused Code
- Much of the socket programming communication is adapted from [Beej's Guide to Network Programming](http://www.beej.us/guide/bgnet/)
- Functionality like encryption, parsing lines from files were derived from ChatGPT
- Getting the client port number was gotten from the Project Description il

