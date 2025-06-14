<meta name="description" content="Stock Smart AI">
<meta name="keywords" content="stock, smart, ai, agent, mcp">
<img src="images/logo.png" width="100" height="100" alt="Example Image">

# Stock Smart AI

### Overview
Stock Smart AI is an innovative inventory stock tracker designed to revolutionize the way businesses manage their inventory. Leveraging advanced AI services and intelligent agents, this system provides unparalleled support and data analysis capabilities. It employs AI to assist users in real-time, offering guidance and insights to optimize stock levels and predict future demands accurately. Additionally, Stock Smart AI communicates interactively with users, explaining its functionalities and providing updates on inventory status through a user-friendly application interface. This integration of AI not only enhances operational efficiency but also ensures that users can make informed decisions based on reliable, data-driven insights.

### Download and Install DBeaver Community Version
Allows to visualize the tables

``` 
https://dbeaver.io/
```

### Download the application
```
git clone https://github.com/fabandalm/stock-smart-ai.git
```

### Start up the application
```
docker-compose up -d
```

#### Only for the first time - copy and run data script file
``` 
docker cp database/seed.sql stock-smart-ai-db:/stock-smart-ai-db/data/seed.sql
```

```
docker exec -it stock-smart-ai-db psql -U postgres -d postgres -f /stock-smart-ai-db/data/seed.sql
```

### Shut down the application
```
docker-compose down
```

### Architecture

![stock smart_ai-architecture](/images/stock_smart_ai-architecture.png)
