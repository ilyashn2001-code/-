// 📁 Данные: Объекты с вложенными работами
const objectData = [
    {
        "id": 1,
        "name": "Дворовая территория по адресу: Путевой пр. 38",
        "objectId": "1004466",
        "oghId": "403405",
        "year": 2024,
        "district": "СВАО",
        "performer": "АД",
        "responsible": "Андреев Ю.А",
        "startDate": "15.04.2024",
        "endDate": "25.08.2024",
        "progress": "100",
        "_children": [
            {
                "name": "Ремонт покрытия асфальтобетонного проезда в рамках благоустройства территории",
                "objectId": "1004466",
                "oghId": "403405",
                "year": 2024,
                "district": "СВАО",
                "performer": "АД",
                "responsible": "Андреев Ю.А",
                "startDate": "15.04.2024",
                "endDate": "25.04.2024",
                "progress": "100"
            },
            {
                "name": "Устройство покрытия асфальтобетонного проезда в рамках благоустройства территории",
                "objectId": "1004466",
                "oghId": "403405",
                "year": 2024,
                "district": "СВАО",
                "performer": "АД",
                "responsible": "Андреев Ю.А",
                "startDate": "25.04.2024",
                "endDate": "11.05.2024",
                "progress": "100"
            },
            {
                "name": "Ремонт покрытия асфальтобетонного тротуара в рамках благоустройства территории",
                "objectId": "1004466",
                "oghId": "403405",
                "year": 2024,
                "district": "СВАО",
                "performer": "АД",
                "responsible": "Андреев Ю.А",
                "startDate": "11.05.2024",
                "endDate": "28.05.2024",
                "progress": "100"
            },
            {
                "name": "Замена дорожного бортового камня в рамках благоустройства территории",
                "objectId": "1004466",
                "oghId": "403405",
                "year": 2024,
                "district": "СВАО",
                "performer": "АД",
                "responsible": "Андреев Ю.А",
                "startDate": "28.05.2024",
                "endDate": "15.06.2024",
                "progress": "100"
            },
            {
                "name": "Устройство дорожного бортового камня в рамках благоустройства территории",
                "objectId": "1004466",
                "oghId": "403405",
                "year": 2024,
                "district": "СВАО",
                "performer": "АД",
                "responsible": "Андреев Ю.А",
                "startDate": "15.06.2024",
                "endDate": "22.07.2024",
                "progress": "100"
            },
            {
                "name": "Ремонт покрытия асфальтобетонного автопарковки в рамках благоустройства территории",
                "objectId": "1004466",
                "oghId": "403405",
                "year": 2024,
                "district": "СВАО",
                "performer": "АД",
                "responsible": "Андреев Ю.А",
                "startDate": "22.07.2024",
                "endDate": "25.08.2024",
                "progress": "100"
            },
        ]
    }
];

// 📎 Данные: Документы
const documentsData = [
  {
    id: "doc-110628-1",
    name: "📄 Реестр приложений к акту",
    objectId: 110628,
    docType: "Реестр",
    docNumber: "б/н",
    uploadDate: "22.09.2024",
    pageCount: 2,
    sheetNum: 566
  },
  {
    id: "doc-110628-2",
    name: "📄 Сертификат качества (газон)",
    objectId: 110628,
    docType: "Сертификат",
    docNumber: "829413ГТ",
    uploadDate: "03.10.2019",
    pageCount: 2,
    sheetNum: 568
  }
];

const objectFilterFields = [
  { id: "filter-name", field: "name" },
  { id: "filter-objectId", field: "objectId" },
  { id: "filter-oghId", field: "oghId" },
  { id: "filter-year", field: "year" },
  { id: "filter-district", field: "district" },
  { id: "filter-performer", field: "performer" },
  { id: "filter-responsible", field: "responsible" },
];



// 📋 Колонки объектов
const objectColumns = [
  { title: "Наименование", field: "name", widthGrow: 2 },
  { title: "ID объекта", field: "objectId" },
  { title: "Статус", field: "status" },
  { title: "Год", field: "year" },
  { title: "Округ", field: "district" },
  { title: "Исполнитель", field: "performer" },
  { title: "Ответственный", field: "responsible" },
  { title: "Начало", field: "startDate" },
  { title: "Окончание", field: "endDate" },
  { title: "Статус работы", field: "workStatus" },
  { title: "Прогресс", field: "progress" }
];

// 📋 Колонки документов
const documentColumns = [
  { title: "Наименование", field: "name", widthGrow: 2 },
  { title: "Номер", field: "docNumber" },
  { title: "Дата", field: "uploadDate" },
  { title: "Тип", field: "docType" },
  { title: "ID объекта", field: "objectId" },
  { title: "Листов", field: "pageCount" },
  { title: "Лист №", field: "sheetNum" }
];

document.addEventListener("DOMContentLoaded", () => {
  // 📁 Реестр объектов
  const tableObjects = new Tabulator("#table-objects", {
    data: objectData,
    layout: "fitColumns",
    height: 850,
    placeholder: "Нет данных",
    dataTree: true,
    dataTreeStartExpanded: false,
    dataTreeChildField: "_children",
    dataTreeCollapseElement: "<span style='margin-right:6px;'>▼</span>",
    dataTreeExpandElement: "<span style='margin-right:6px;'>▶</span>",
    headerSort: false,
    columns: [
      { title: "Наименование", field: "name", widthGrow: 2.5 },
      { title: "ID объекта", field: "objectId" },
      { title: "ID ОГХ", field: "oghId" },
      { title: "Год", field: "year" },
      { title: "Округ", field: "district" },
      { title: "Исполнитель", field: "performer" },
      { title: "Ответственный", field: "responsible" },
      { title: "Дата начала", field: "startDate" },
      { title: "Дата окончания", field: "endDate" },
      { title: "% Завершения", field: "progress" },
    ],
  });

  // 📎 Реестр документов
  const tableDocuments = new Tabulator("#table-documents", {
    data: documentsData,
    columns: documentColumns,
    layout: "fitDataStretch",
    height: 500,
    placeholder: "Нет данных",
    pagination: false,
    groupBy: "objectId"
  });

  // 🔁 Переключение вкладок
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-section").forEach(tab => tab.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  // 🧾 Объявление переменных фильтров (проверь наличие input'ов в HTML)
  const filterName = document.getElementById("filter-name");
  const filterObjectId = document.getElementById("filter-objectId");
  const filterStatus = document.getElementById("filter-status");
  const filterDistrict = document.getElementById("filter-district");
  const filterPerformer = document.getElementById("filter-performer");
  const filterYear = document.getElementById("filter-year");
  const filterStart = document.getElementById("filter-start");
  const filterEnd = document.getElementById("filter-end");

  // 🔍 Фильтрация объектов
  const objectFilterInputs = document.querySelectorAll("#tab-objects .top-bar input");
  objectFilterInputs.forEach(input => {
    input.addEventListener("input", () => {
      const filters = [];

      if (filterName?.value) filters.push({ field: "name", type: "like", value: filterName.value });
      if (filterObjectId?.value) filters.push({ field: "objectId", type: "like", value: filterObjectId.value });
      if (filterStatus?.value) filters.push({ field: "status", type: "like", value: filterStatus.value });
      if (filterDistrict?.value) filters.push({ field: "district", type: "like", value: filterDistrict.value });
      if (filterPerformer?.value) filters.push({ field: "performer", type: "like", value: filterPerformer.value });
      if (filterYear?.value) filters.push({ field: "year", type: "like", value: filterYear.value });
      if (filterStart?.value) filters.push({ field: "startDate", type: "like", value: filterStart.value });
      if (filterEnd?.value) filters.push({ field: "endDate", type: "like", value: filterEnd.value });

      tableObjects.setFilter(filters);
    });
  });
});


  // 🔍 Фильтры документов
  const docFilterInputs = document.querySelectorAll("#tab-documents .top-bar input");
  docFilterInputs.forEach(input => {
    input.addEventListener("input", () => {
      const [name, number, date] = [...docFilterInputs].map(i => i.value);
      tableDocuments.setFilter([
        { field: "name", type: "like", value: name },
        { field: "docNumber", type: "like", value: number },
        { field: "uploadDate", type: "like", value: date }
      ]);
    });
  });
});
