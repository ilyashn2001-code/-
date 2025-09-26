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

// 📋 Колонки: Объекты и Работы
const objectColumns = [
  { title: "Наименование", field: "name", widthGrow: 2 },
  { title: "ID объекта", field: "objectId" },
  { title: "Статус", field: "status" },
  { title: "Год", field: "year" },
  { title: "Округ", field: "district" },
  { title: "Исполнитель", field: "performer" },
  { title: "Ответственный", field: "responsible" },
  { title: "Дата начала", field: "startDate" },
  { title: "Дата окончания", field: "endDate" },
  { title: "Статус работы", field: "workStatus" },
  { title: "% Завершения", field: "progress" }
];

// 📋 Колонки: Документы
const documentColumns = [
  { title: "Наименование", field: "name", widthGrow: 2 },
  { title: "Номер", field: "docNumber" },
  { title: "Дата", field: "uploadDate" },
  { title: "Тип", field: "docType" },
  { title: "ID объекта", field: "objectId" },
  { title: "Листов", field: "pageCount" },
  { title: "Лист №", field: "sheetNum" }
];

// 🚀 Инициализация таблиц и вкладок
document.addEventListener("DOMContentLoaded", () => {
  // 🏗️ Таблица: Реестр объектов с работами
  const tableObjects = new Tabulator("#table-objects", {
    data: objectData,
    columns: objectColumns,
    layout: "fitColumns",
    height: "500px",
    placeholder: "Нет данных для отображения",
    dataTree: true,
    dataTreeStartExpanded: false,
    dataTreeChildField: "works"
  });

  // 📂 Таблица: Реестр документов с группировкой по объекту
  const tableDocuments = new Tabulator("#table-documents", {
    data: documentsData,
    columns: documentColumns,
    layout: "fitColumns",
    height: "500px",
    placeholder: "Нет данных для отображения",
    groupBy: "objectId"
  });

  // 🔁 Переключение вкладок
  document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      document.querySelectorAll(".tab-content").forEach((tab) => {
        tab.classList.remove("active");
        if (tab.id === btn.dataset.tab) {
          tab.classList.add("active");
        }
      });
    });
  });

  // 🔍 Фильтры: Реестр объектов
  document.querySelectorAll("#object-filters input").forEach((input) => {
    input.addEventListener("input", () => {
      tableObjects.setFilter([
        { field: "name", type: "like", value: document.getElementById("filter-name").value },
        { field: "objectId", type: "like", value: document.getElementById("filter-id").value },
        { field: "status", type: "like", value: document.getElementById("filter-status").value },
        { field: "district", type: "like", value: document.getElementById("filter-district").value },
        { field: "performer", type: "like", value: document.getElementById("filter-performer").value },
        { field: "year", type: "like", value: document.getElementById("filter-year").value },
        { field: "startDate", type: "like", value: document.getElementById("filter-start").value },
        { field: "endDate", type: "like", value: document.getElementById("filter-end").value }
      ]);
    });
  });

  // 🔍 Фильтры: Реестр документов
  document.querySelectorAll("#document-filters input").forEach((input) => {
    input.addEventListener("input", () => {
      tableDocuments.setFilter([
        { field: "name", type: "like", value: document.getElementById("filter-doc-name").value },
        { field: "docNumber", type: "like", value: document.getElementById("filter-doc-num").value },
        { field: "uploadDate", type: "like", value: document.getElementById("filter-doc-date").value }
      ]);
    });
  });
});
