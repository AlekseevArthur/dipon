<table  class="table table-bordered table-hover table-striped">
<thead class="thead-dark">
    <tr>
        <th scope="col" rowspan=2>Наименование показателя</th>
        <th scope="col" rowspan=2>Код строк</th>
        <th scope="col" colspan=2>@Convert.ToDateTime(ViewData["dateF"]).ToString("dd-MM-yyyy")</th>
        <th scope="col" colspan=2>@Convert.ToDateTime(ViewData["dateS"]).ToString("dd-MM-yyyy")</th>
        <th scope="col" colspan=2>Отклонение +-</th>
        <th scope="col" rowspan=2>Темп прироста</th>
    </tr>
    <tr>
        <th>тыс руб</th>
        <th>% к итогу</th>
        <th>тыс руб</th>
        <th>% к итогу</th>
        <th>тыс руб</th>
        <th>% к итогу</th>
    </tr>
</thead>