// 📁 Данные: Объекты с вложенными работами
const objectData = [
  {
    id: "obj-110628",
    name: "📍 1905 года улица",
    objectId: 110628,
    district: "ЦАО",
    performer: "АД",
    responsible: "Сторожев Владимир Львович",
    status: "В работе",
    year: "2024",
    startDate: "01.03.2024",
    endDate: "30.09.2024",
    progress: 80,
    workStatus: "Идет",
    works: [
      {
        name: "Работа 1: Демонтаж",
        objectId: 110628,
        district: "ЦАО",
        performer: "АД",
        responsible: "Иванов",
        status: "Завершено",
        year: "2024",
        startDate: "01.03.2024",
        endDate: "15.05.2024",
        progress: 100,
        workStatus: "Завершено"
      },
      {
        name: "Работа 2: Озеленение",
        objectId: 110628,
        district: "ЦАО",
        performer: "АД",
        responsible: "Петров",
        status: "В процессе",
        year: "2024",
        startDate: "16.05.2024",
        endDate: "30.09.2024",
        progress: 60,
        workStatus: "В работе"
      }
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
  const tableObjects = new Tabulator("#tableObjects", {
    data: objectData,
    columns: objectColumns,
    layout: "fitDataStretch",
    height: 500,
    placeholder: "Нет данных",
    dataTree: true,
    dataTreeStartExpanded: false,
    dataTreeChildField: "works",
    pagination: false
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
