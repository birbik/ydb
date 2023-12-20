var yandex_function_url = 'https://functions.yandexcloud.net/d4eko8ur1dqjhvt0e3od'
// Метод для конвертации формата python в воспринимаемую js строку
function preconvert_json(string) {
    let json = string.split('\'').join("\"");
    return json.split('b\"').join("\"");
}

// Метод, который будет заполнять таблицу пришедшими данными
function update_passenger_list(data) 
{
    $("#passenger_table td").parent().remove();
    let received_passenger = JSON.parse(preconvert_json(data));
    if(received_passenger.length > 0)
    {
        for(let i = 0; i < received_passenger.length; ++i) {
            // Создаем объект класса для каждой пришедшей сущности
            let passenger = new Passenger(received_passenger[i]);
            // Выполняем поиск элемента по ID, выбираем из него последний
            // элемент с тегом tr - table row
            $('#passenger_table tr:last').after(passenger.to_table_entry());
        }
        $("#passenger_table").show();
    } else {
        output_error("Incorrect data received")
    }
}

// Метод, который покажет сообщение об ошибке и скроет её через пару секунд 
function output_error(message, timeout = 2000) 
{
    $('.error_message').show();
    $('.error_message').text(message);
    setTimeout(function() {
        $('.error_message').hide();
    }, timeout);
}