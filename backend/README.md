# Stock Smart Backend API

### Build stock smart ai api docker image
``` 
docker build -t fabandalm/stock-smart-ai-api:1.0.0 .
```

### Push docker image to Docker Hub Registry
``` 
docker push fabandalm/stock-smart-ai-api:1.0.0
```

### Run stock smart ai api docker container
```
docker run -p 8080:8080  --rm --name stock-smart-ai-api fabandalm/stock-smart-ai-api:1.0.0
```
