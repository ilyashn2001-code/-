const journalData = [
  {
    objectTitle: "Путевой пр., д. 38",
    objectId: 101,
    works: [
      {
        repairRange: "01.05–10.05",
        objectId: 101,
        performer: "ООО РемСтрой",
        contractor: "АльфаСтрой",
        responsible: "Иванов И.И."
      },
      {
        repairRange: "11.05–15.05",
        objectId: 101,
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
  }
];

function renderJournal(data) {
  const container = document.getElementById('journalTree');
  container.innerHTML = '';

  data.forEach(obj => {
    const el = document.createElement('details');
    el.open = true;

    const summary = document.createElement('summary');
    summary.textContent = `📁 ${obj.objectTitle}`;
    el.appendChild(summary);

    // Виды работ
    const worksTable = document.createElement('table');
    worksTable.className = 'table';
    worksTable.innerHTML = `
      <thead>
        <tr>
          <th colspan="5">Виды работ</th>
        </tr>
        <tr>
          <th>Границы ремонта</th>
          <th>ID объекта</th>
          <th>Исполнитель</th>
          <th>Подрядчик</th>
          <th>Ответственный</th>
        </tr>
      </thead>
      <tbody>
        ${obj.works.map(w => `
          <tr>
            <td>${w.repairRange}</td>
            <td>${w.objectId}</td>
            <td>${w.performer}</td>
            <td>${w.contractor}</td>
            <td>${w.responsible}</td>
          </tr>
        `).join('')}
      </tbody>
    `;
    el.appendChild(worksTable);

    // Документы
    const docsTable = document.createElement('table');
    docsTable.className = 'table';
    docsTable.innerHTML = `
      <thead>
        <tr>
          <th colspan="4">Документы</th>
        </tr>
        <tr>
          <th>Название документа</th>
          <th>Тип</th>
          <th>Дата загрузки</th>
          <th>Ответственный</th>
        </tr>
      </thead>
      <tbody>
        ${obj.documents.map(d => `
          <tr>
            <td>${d.title}</td>
            <td>${d.type}</td>
            <td>${d.uploadDate}</td>
            <td>${d.responsible}</td>
          </tr>
        `).join('')}
      </tbody>
    `;
    el.appendChild(docsTable);

    container.appendChild(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderJournal(journalData);
});
