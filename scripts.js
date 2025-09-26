// 🔧 Объект + Документы
const journalData = [
  {
    id: "obj-110628",
    name: "📍 1905 года улица",
    objectId: 110628,
    district: "ЦАО",
    performer: "АД",
    responsible: "Сторожев Владимир Львович",
    repairRange: "на всем протяжении",
    docType: "",
    docNumber: "",
    uploadDate: "",
    pageCount: "",
    sheetNum: "",
    type: "object",
    children: [
      {
        id: "doc-110628-1",
        name: "📄 Реестр приложений к акту",
        docType: "Реестр",
        docNumber: "б/н",
        uploadDate: "22.09.2024",
        pageCount: 2,
        sheetNum: 566,
        type: "document"
      },
      {
        id: "doc-110628-2",
        name: "📄 Сертификат качества (газон)",
        docType: "Сертификат",
        docNumber: "829413ГТ",
        uploadDate: "03.10.2019",
        pageCount: 2,
        sheetNum: 568,
        type: "document"
      },
      {
        id: "doc-110628-3",
        name: "📄 Документ о замене (бетон)",
        docType: "Инфо",
        docNumber: "530",
        uploadDate: "11.08.2024",
        pageCount: 1,
        sheetNum: 570,
        type: "document"
      }
    ]
  }
];


document.addEventListener("DOMContentLoaded", () => {
  const table = new Tabulator("#journalTable", {
    data: journalData,
    dataTree: true,
    dataTreeStartExpanded: true,
    layout: "fitColumns",
    height: "600px",
    placeholder: "Нет данных для отображения",
columns: [
  { title: "Наименование", field: "name", widthGrow: 2 },
  { title: "ID объекта", field: "objectId", hozAlign: "center", visible: true },
  { title: "Округ", field: "district", visible: true },
  { title: "Границы ремонта", field: "repairRange", visible: true },
  { title: "Исполнитель", field: "performer", visible: true },
  { title: "Ответственный", field: "responsible", visible: true },
  // Документные поля
  { title: "Тип документа", field: "docType", visible: true },
  { title: "Номер документа", field: "docNumber", visible: true },
  { title: "Дата загрузки", field: "uploadDate", visible: true },
  { title: "Кол-во листов", field: "pageCount", visible: true },
  { title: "Лист по порядку", field: "sheetNum", visible: true }
]
,
    rowFormatter: function(row) {
      const type = row.getData().type;
      if (type === "document") {
        row.getElement().style.backgroundColor = "#f9f9f9";
      }
    }
  });
});
