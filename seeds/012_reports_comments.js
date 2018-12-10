
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('reports_comments').del()
    .then(() => Promise.all([
      // Inserts seed entries
      knex('reports_comments').insert([
        { report_id: 100901,
          comment_id: 100607
        },
        { report_id: 100902,
          comment_id: 100608
        },
        { report_id: 100903,
          comment_id: 100609
        }
      ])
    ])
  )
}
