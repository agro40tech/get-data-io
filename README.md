# Документация к приложению Get-Data.io.

## Карточки

### 1. JobArticleTitlesRepeats

Данный тип карточки принимает параметрами массив, его предварительно нужно перебрать через сервис CreateArr-titles-repeats. Данный сервис принимает параметрами массив и путь до данных в строковом виде к примеру `area.name`.
Он принимает массив данных и фильтрует до такого вида `[{name: string}, {name: string}]` где `name` любая строка с информацией. После этого считает кол-во повторений `{name: string}` в массиве и создает новый массив такого вида `[{name: string, repeats: number}]` где `repeats` это кол-во повторений `name` в массиве.
После, удалаяет повторения, сортирует данные и помечает объет с самым высоким числом `repeats`, возвращает массив такого вида `[{name: string, repeats: number, top?: boolean}, ...]`.
Данный сервис использует микро-сервисы:

- CountOccurrences (Подсчет повторений в массиве)
- RemoveDuplicates (Удаление повторных записей из массива)
- ArrSorted (Сортировка массива)

Сервис CountOccurrences принимает параметрами массив и цель, которую проверяют, возвращает число повторений этой цели.

Сервис RemoveDuplicates принимает параметрами массив и удаляет все объекты, которые повторяются больше 1-го раза, возвращает массив, где объекты не повторяются.

Сервис ArrSorted принимает параметрами массив и сортирует по убыванию кол-во повторении, в случае если повторений одинаковое кол-во то сортирует `name` по алфавиту, возвращает уже отсортированный массив данных такого вида `[{name: string, repeats: number}, ...]`.
