# Pet-project
### Развлекательный проект по мотивам фильма разработан как итоговый проект курса МШП по JavaScript в 2021 году

## Настройка проекта

### Configure docker
##### BUILD:
```
docker build -t pet_projects_host .
```
##### RUN:
```
docker run -it -p 3000:3000 --rm --name pet_projects pet_projects_host
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
