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
  layout: "fitDataStretch",
  height: 500,
  placeholder: "Нет данных",
  dataTree: true,
  dataTreeStartExpanded: false,
  dataTreeChildField: "_children",
  headerSort: false, // ⛔ отключить сортировку
  columns: [
    { title: "Наименование", field: "name", widthGrow: 3 },
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
  const tableDocuments = new Tabulator("#tableDocuments", {
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

  // 🔍 Фильтры объектов
  const objectFilterInputs = document.querySelectorAll("#tab-objects .top-bar input");
  objectFilterInputs.forEach(input => {
    input.addEventListener("input", () => {
      const [name, id, status, district, performer, year, start, end] = [...objectFilterInputs].map(i => i.value);
      tableObjects.setFilter([
        { field: "name", type: "like", value: name },
        { field: "objectId", type: "like", value: id },
        { field: "status", type: "like", value: status },
        { field: "district", type: "like", value: district },
        { field: "performer", type: "like", value: performer },
        { field: "year", type: "like", value: year },
        { field: "startDate", type: "like", value: start },
        { field: "endDate", type: "like", value: end }
      ]);
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
