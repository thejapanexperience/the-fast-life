const admin = require('firebase-admin');
const path = require('path');

const configPath = path.join(__dirname, '../../firebase-config.json');

console.log('process.env: ', process.env);

admin.initializeApp({
  credential: admin.credential.cert({
    type: 'service_account',
    project_id: 'thefastlife-571fa',
    private_key_id: '2082822e34d369a55b70167543e85bf8dcb38968',
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC1K1VvE335Tj+R\nVZ3tSMO72HEUTaUcjDE/2qRSqfZg8Q8xQlepeRYygP2ymOYVsg2XTLBkBhCf//GO\nvmuub8ZAkM7e3bBUgDLT5wwLQY1+Li6f7UNpYjiCOuctaMmVREb+7vS0cqsJt9Kc\nCxjQA18AgH4jL0097CdRudXEMgk2w7u6nvBdJ+8ei+oR6maJ+AVG48XHj1VcjbdZ\nZSq3FddkXQpfe16oK5S1gjvtBfWFSZe1cmM450UErQ1DXPp3pZxHiSl8U+TGFBDq\n/KF99e2XpfUqx49wNjfNvNnqSxesf7ElM++oltreZd7XG5CLG+9oAZv00utyAK/Y\nLYGY54SFAgMBAAECggEAQYvXEiPsPOm5h/yA8duUrX7GksDwzt5N5ztUnm/Nqw8s\nHvdQvgkIJeeTYi19eTX9QtNFMjsbgrfYDnwIe4kHIk8B+ZIdfMURHqeGLQBfj9pn\nlgcCj7swlLV49G3oGPAl+5A6ypp+FTsDoN9G7+N4WLcka9huSswJAcGJfL1Zpg0Z\nJV23QtG8DWOFmDo6vpPBhzUpSeb5Q4elDuJaSld+99DUY90mmDGbFfIq7wdfBNcf\nGxgDnVD/bBO8pQNGpiN3aEN8O93j+AMEBeta3+BUWZlRuhmBYrUc2BOj1yk243rc\nKYgAj2RH8++LzzvPfQ6xCryPqpd2LpkvFfMZQBup9QKBgQDYow3hI7pVtnCWagKo\npRW3ALZMKRYaQKtm/xutL3Jz58FJMFZd32eLHEJwrDo45MS6bQbVIPhyfkvPsXeC\nApEUoOwvFY7TvI3sEin6uWaLPHJW1qpMYR+Nq1jbuiAiicfTbqXZs3MMK3zhHFhH\nguda0CCv920AEwEld/1jEn6q2wKBgQDWFn0L5KcVBvwEP8Bo55wzqSSxKA2CuogJ\nWRhSBcRvFDpz56Si7M2L3YkSglFNT540a6jA9r+DnztpdgqzfTV284emOgxx9cQo\n3/STqn6lnAoMOTIYI81OVsVWLudsfwWQFK29mqeWgrgbRYlf+fZvBup4+J/mZ2po\n0Xb3Aci8HwKBgQCH7Z9K0aEcINH5/uBWMucyIVdA6FK+/C7P/GfAPdIhmZv0sUiv\ns/qDFaM2kUoi4p/xnXE5D2v0YvxsgBzNTZD8kZBAZtVsU5X1NtxyPhxyZuYTSLQo\nIpSqzoV9sQZyxWLFblrQA0G/tBWyJZfanu9NUuP/pU8WSdZhTS2HGVazGwKBgQCL\nLt2nEMVrTzoizQubaBBOKcX4AtEdz4VHhovgL22wxZbm6Y9IeOl8588IoH6Y4404\nCVIR+Zkyyh/HBX4ZiOpsZhEniY+zuxMHe+o24l4p7tM9dSXTOdts9c6fpCjCiaYl\nMLxviw8vM9bbrA6OviRvtDBV61WRZmRwttU/6wIFAwKBgQC49WzLAIWw9oGHlrsb\nZtr/OVh45jvZy6LYZWvGePHzCizE7XSL49IyS6ND2tTTzgf0+Y3tFBawPVJYuQZz\nKlD8oX8jIlroWQOUfupWVKr/LrEOr1yS1xZdoRKPSNKTskVR+Ntj/5PTtiycP4PA\nSdCAXbV1ktsEzxZ1G0cYo6HGuA==\n-----END PRIVATE KEY-----\n',
    client_email: 'thefastlife-571fa@appspot.gserviceaccount.com',
    client_id: '104767845329973984310',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://accounts.google.com/o/oauth2/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/thefastlife-571fa%40appspot.gserviceaccount.com',
  }),
  databaseURL: 'https://thefastlife-571fa.firebaseio.com',
});

module.exports = admin;
