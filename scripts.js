// Шаг 1: Генерация тестовых данных (6 объектов)
const journalData = Array.from({ length: 6 }, (_, i) => ({
  objectTitle: `Объект №${i + 1}, ул. Примерная, д. ${10 + i}`,
  objectId: 100 + i,
  works: [
    {
      repairRange: "01.05–10.05",
      objectId: 100 + i,
      performer: "ООО РемСтрой",
      contractor: "АльфаСтрой",
      responsible: "Иванов И.И."
    },
    {
      repairRange: "11.05–15.05",
      objectId: 100 + i,
      performer: "ООО ГазонСервис",
      contractor: "АльфаСтрой",
      responsible: "Петров П.П."
    }
  ],
  documents: [
    {
      title: "Схема водоотведения.pdf",
      type: "Схема",
      uploadDate: "01.05.2024",
      responsible: "Петров П.П."
    },
    {
      title: "Акт приёмки №12.docx",
      type: "Акт",
      uploadDate: "10.05.2024",
      responsible: "Сидоров С.С."
    }
  ]
}));

// Шаг 2: Преобразование для Tabulator
function transformToTabulator(data) {
  return data.map(obj => ({
    id: `obj-${obj.objectId}`,
    name: obj.objectTitle,
    type: "object",
    children: [
      // Работы
      ...obj.works.map((w, i) => ({
        id: `work-${obj.objectId}-${i}`,
        name: w.repairRange,
        type: "work",
        objectId: w.objectId,
        performer: w.performer,
        contractor: w.contractor,
        responsible: w.responsible,
      })),
      // Документы
      ...obj.documents.map((d, i) => ({
        id: `doc-${obj.objectId}-${i}`,
        name: d.title,
        type: "document",
        docType: d.type,
        uploadDate: d.uploadDate,
        responsible: d.responsible,
      }))
    ]
  }));
}

// Шаг 3: Инициализация таблицы после загрузки страницы
document.addEventListener("DOMContentLoaded", () => {
  const tableData = transformToTabulator(journalData);

  new Tabulator("#journalTable", {
    data: tableData,
    dataTree: true,
    dataTreeStartExpanded: false, // свернуто по умолчанию
    layout: "fitColumns",
    height: "600px",
    columns: [
      { title: "Наименование", field: "name", widthGrow: 2 },
      { title: "ID объекта", field: "objectId", hozAlign: "center" },
      { title: "Исполнитель", field: "performer" },
      { title: "Подрядчик", field: "contractor" },
      { title: "Тип документа", field: "docType" },
      { title: "Дата загрузки", field: "uploadDate" },
      { title: "Ответственный", field: "responsible" },
    ],
    placeholder: "Нет данных для отображения",
  });
});
