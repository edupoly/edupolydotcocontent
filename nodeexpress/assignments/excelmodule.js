var excel = require('excel4node');

var workbook = new excel.Workbook();

var worksheet = workbook.addWorksheet('Sheet 1');
var worksheet2 = workbook.addWorksheet('Sheet 2');
var worksheet44 = workbook.addWorksheet("Accountsheet")

worksheet.cell(1,1).number(100);
worksheet.cell(1,2).number(200);
worksheet2.cell(10,5).string("hemanth")
worksheet44.cell(10,10).number(120303)
workbook.write('MyExcel4.xlsx');