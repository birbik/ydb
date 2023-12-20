// Конструктор, формирующий поля класс по объекту JSON
function Passenger(obj) {
    this.id_passenger = obj.id_passenger;
    this.date = obj.date;
    this.fio = obj.fio;
    this.number_passport = obj.number_passport;
    this.sex = obj.sex;
}

Passenger.prototype = {
    constructor: Passenger,
    print: function() {
        console.log(this.to_string());
    },
    to_string: function() {
        return "Id_passenger: " + this.id_passenger + ", Date " + this.date + ", FIO: " + this.fio+ + ", Number passport " + this.number_passport + ", Sex " + this.sex;
    },
    // Используемый ранее метод, возвращающий форматированные поля класса
    // <tr>...</tr> - строка таблиы, table row
    // <td>...</td> - элемент на пересечении колонки и строки
    to_table_entry: function() {
        return '<tr><td>' + 
        this.id_passenger + '</td><td>' + 
        this.date + '</td><td>' + 
        this.fio + '</td><td>'+
        this.number_passport + '</td><td>'+
        this.sex + '</td></tr>'
    }
}