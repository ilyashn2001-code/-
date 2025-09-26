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

function renderJournal(data) {
  const container = document.getElementById('journalTree');
  container.innerHTML = '';

  data.forEach(obj => {
    const card = document.createElement('div');
    card.className = 'card';

    const title = document.createElement('h2');
    title.textContent = obj.objectTitle;
    card.appendChild(title);

    // Виды работ
    const worksTable = document.createElement('table');
    worksTable.className = 'table';
    worksTable.innerHTML = `
      <thead>
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
    card.appendChild(worksTable);

    // Документы
    const docsTable = document.createElement('table');
    docsTable.className = 'table';
    docsTable.innerHTML = `
      <thead>
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
    card.appendChild(docsTable);

    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderJournal(journalData);
});
