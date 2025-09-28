// 📁 Данные: Объекты
const objectData = [
  {
    id: 1,
    name: "Дворовая территория по адресу: Путевой пр. 38",
    objectId: "1004466",
    oghId: "403405",
    year: 2024,
    district: "СВАО",
    performer: "АД",
    responsible: "Андреев Ю.А",
    startDate: "15.04.2024",
    endDate: "25.08.2024",
    progress: "100",
    _children: [
      {
        name: "Ремонт покрытия асфальтобетонного проезда в рамках благоустройства территории",
        objectId: "1004466",
        oghId: "403405",
        year: 2024,
        district: "СВАО",
        performer: "АД",
        responsible: "Андреев Ю.А",
        startDate: "15.04.2024",
        endDate: "25.04.2024",
        progress: "100",
      },
      {
        name: "Устройство покрытия асфальтобетонного проезда в рамках благоустройства территории",
        objectId: "1004466",
        oghId: "403405",
        year: 2024,
        district: "СВАО",
        performer: "АД",
        responsible: "Андреев Ю.А",
        startDate: "25.04.2024",
        endDate: "11.05.2024",
        progress: "100",
      },
      {
        name: "Ремонт покрытия асфальтобетонного тротуара в рамках благоустройства территории",
        objectId: "1004466",
        oghId: "403405",
        year: 2024,
        district: "СВАО",
        performer: "АД",
        responsible: "Андреев Ю.А",
        startDate: "11.05.2024",
        endDate: "28.05.2024",
        progress: "100",
      },
      {
        name: "Замена дорожного бортового камня в рамках благоустройства территории",
        objectId: "1004466",
        oghId: "403405",
        year: 2024,
        district: "СВАО",
        performer: "АД",
        responsible: "Андреев Ю.А",
        startDate: "28.05.2024",
        endDate: "15.06.2024",
        progress: "100",
      },
      {
        name: "Устройство дорожного бортового камня в рамках благоустройства территории",
        objectId: "1004466",
        oghId: "403405",
        year: 2024,
        district: "СВАО",
        performer: "АД",
        responsible: "Андреев Ю.А",
        startDate: "15.06.2024",
        endDate: "22.07.2024",
        progress: "100",
      },
      {
        name: "Ремонт покрытия асфальтобетонного автопарковки в рамках благоустройства территории",
        objectId: "1004466",
        oghId: "403405",
        year: 2024,
        district: "СВАО",
        performer: "АД",
        responsible: "Андреев Ю.А",
        startDate: "22.07.2024",
        endDate: "25.08.2024",
        progress: "100",
      },
    ],
  },
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
    sheetNum: 566,
  },
  {
    id: "doc-110628-2",
    name: "📄 Сертификат качества (газон)",
    objectId: 110628,
    docType: "Сертификат",
    docNumber: "829413ГТ",
    uploadDate: "03.10.2019",
    pageCount: 2,
    sheetNum: 568,
  },
];

// 📋 Колонки объектов
const objectColumns = [
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
];

// 📋 Колонки документов
const documentColumns = [
  { title: "Наименование", field: "name", widthGrow: 2 },
  { title: "Номер", field: "docNumber" },
  { title: "Дата", field: "uploadDate" },
  { title: "Тип", field: "docType" },
  { title: "ID объекта", field: "objectId" },
  { title: "Кол-во листов", field: "pageCount" },
  { title: "Лист №", field: "sheetNum" },
];

// 🚀 Основной запуск
document.addEventListener("DOMContentLoaded", () => {
  // Инициализация таблицы объектов
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
    columns: objectColumns,
  });

  // Инициализация таблицы документов
  const tableDocuments = new Tabulator("#table-documents", {
    data: documentsData,
    columns: documentColumns,
    layout: "fitDataStretch",
    height: 500,
    placeholder: "Нет данных",
    pagination: false,
    groupBy: "objectId",
  });

  // Переключение вкладок
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-section").forEach((tab) => tab.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  // Фильтрация объектов
  const objectFilterInputs = document.querySelectorAll("#tab-objects .top-bar input");
  objectFilterInputs.forEach((input) => {
    input.addEventListener("input", () => {
      const filters = [...objectFilterInputs]
        .map((el) => {
          const value = el.value.trim();
          const field = el.id.replace("filter-", "");
          return value ? { field, type: "like", value } : null;
        })
        .filter(Boolean);
      tableObjects.setFilter(filters);
    });
  });
});
