// 📋 Колонки объектов
const objectColumns = [
  { title: "Наименование", field: "name", widthGrow: 2 },
  { title: "ID объекта", field: "objectId" },
  { title: "ID ОГХ", field: "oghId" },
  { title: "Год", field: "year" },
  { title: "Округ", field: "district" },
  { title: "Исполнитель", field: "performer" },
  { title: "Ответственный", field: "responsible" },
  { title: "Статус", field: "status" },
  { title: "Начало", field: "startDate" },
  { title: "Окончание", field: "endDate" },
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
  // 📁 Инициализация таблицы объектов
  const tableObjects = new Tabulator("#table-objects", {
    data: objectData,
    layout: "fitColumns",
    height: 600,
    placeholder: "Нет данных",
    dataTree: true,
    dataTreeStartExpanded: false,
    dataTreeChildField: "_children",
    dataTreeCollapseElement: "<span style='margin-right:6px;'>▼</span>",
    dataTreeExpandElement: "<span style='margin-right:6px;'>▶</span>",
    headerSort: false,
    columns: objectColumns
  });

  // 📎 Инициализация таблицы документов
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

  // 🧾 Фильтрация объектов
  const objectFilterInputs = document.querySelectorAll("#tab-objects .top-bar input");
  objectFilterInputs.forEach(input => {
    input.addEventListener("input", () => {
      const filters = [];
      objectFilterInputs.forEach(i => {
        const field = i.id.replace("filter-", "");
        const value = i.value.trim();
        if (value) filters.push({ field, type: "like", value });
      });
      tableObjects.setFilter(filters);
    });
  });

  // 🧾 Фильтрация документов (если будут input'ы)
  const docFilterInputs = document.querySelectorAll("#tab-documents .top-bar input");
  docFilterInputs.forEach(input => {
    input.addEventListener("input", () => {
      const filters = [];
      docFilterInputs.forEach(i => {
        const field = i.dataset.field;
        const value = i.value.trim();
        if (field && value) filters.push({ field, type: "like", value });
      });
      tableDocuments.setFilter(filters);
    });
  });
});
