// 🔧 Реестр объектов
const objectData = [
  {
    id: "obj-110628",
    name: "📍 1905 года улица",
    objectId: 110628,
    district: "ЦАО",
    performer: "АД",
    responsible: "Сторожев Владимир Львович",
    repairRange: "на всем протяжении"
  }
];

// 📎 Реестр документов
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

// 📋 Колонки для объектов
const objectColumns = [
  { title: "Наименование", field: "name", widthGrow: 2 },
  { title: "ID объекта", field: "objectId" },
  { title: "Округ", field: "district" },
  { title: "Границы ремонта", field: "repairRange" },
  { title: "Исполнитель", field: "performer" },
  { title: "Ответственный", field: "responsible" }
];

// 📋 Колонки для документов
const documentColumns = [
  { title: "Документ", field: "name", widthGrow: 2 },
  { title: "ID объекта", field: "objectId" },
  { title: "Тип", field: "docType" },
  { title: "Номер", field: "docNumber" },
  { title: "Дата загрузки", field: "uploadDate" },
  { title: "Листов", field: "pageCount" },
  { title: "Лист по порядку", field: "sheetNum" }
];

// 🚀 Инициализация таблиц и вкладок
document.addEventListener("DOMContentLoaded", () => {
  // Реестр объектов
  new Tabulator("#table-objects", {
    data: objectData,
    columns: objectColumns,
    layout: "fitColumns",
    height: "500px",
    placeholder: "Нет данных для отображения"
  });

  // Реестр документов
  new Tabulator("#table-documents", {
    data: documentsData,
    columns: documentColumns,
    layout: "fitColumns",
    height: "500px",
    placeholder: "Нет данных для отображения"
  });

  // 🔁 Переключение вкладок
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      tabContents.forEach(tab => {
        tab.classList.remove("active");
        if (tab.id === btn.dataset.tab) {
          tab.classList.add("active");
        }
      });
    });
  });
});
