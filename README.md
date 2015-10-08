# datauri-download

Accepts a filename and a datauri, and causes the browser to open a download dialog for the file/data.

## Example

```javascript
datauriDownload('gradebook.csv', 'text/csv;charset=utf-8', toCsv(gradebookData))
```
