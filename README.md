## installation step
1. git clone to local 
2. run command:  
        npm install
3. initalize database:  
        ./scripts/initDB.sh
4. to run backend:
        node server/server.js or npm run start
        backend will lisitening to port 5000. makesure the firewall is closed.
5. to run frontend:
        npm run start_ori
        front end will open at port 3000.

## features 
This web application is used for point cloud data manipulation.
- the application is depolyed on remote cloud server, and we provide user registration/login, so that it can be used as point cloud file cloud storage. We provide **remote file management** functionality to users, as they can **upload/download/rename/delete/rename** ther remote file on server.
- user can edit file once they drag their remote file to workspace, or just open from local. For the manipulation part, we provide following functionalities. These functionalities are mainly modificated from Three.js.
1. **rotate** and **transfrom** point cloud data.
2. **select point** in the scene and then **delete** the points or **add new points** to the scene.   
3. **merge** multiple files into one and upload. 
4. **change scale/color** of the points.
5. **convert to image** and download to local.
6. **convert to mesh** and download to local.
- **not implemented** frame work **Ant Design**

- we adopt **react-dnd** to provide friendly user control. Here are some definitions.
1. user drag the file from server and drop to workspace as to load the file.
2. user drop the file to server area to save the file to server.


## optimization
1. The number of returned server file list is constrain at 5. By including page number in query, so that **reduce the data transfer throughput**.  

## architecture
pseudo UML design  
![UML](./source/UML%20ClassDiagram.jpg)

### for backend archtecture
we use mongodb to store **userid, password and file description**, and a **fileManipulator** to synchonize the file operation in mongodb in parallel. etc. upload,delete,overwrite. These operation above is controled in script server.js.

### for frontend archtecture
![frontend_archtecture](./source/UI%20Components.jpg)

## third part dependency
open source library.
- Three.js
- webGL
- react
