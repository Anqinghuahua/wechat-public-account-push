/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx33157e35301c8cad',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'fd522522a6ecd3a5ba377c5bf4b28a04',

  PROVINCE: '江苏',
  CITY: '南京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '老公',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o2a6d6VmcUlOYTFnppWc509B0XOI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ey5B78v-lVLFQ5SdWsErPuKK5PYplTPgQyuk0O6w0cg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-07',
      festivals: [
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '2-10',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-02-10' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-01-25' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'zhnqkTNtaSwLe2dPnO4y-75VOoG4RwUZSB9mTzgc_Pc',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o2a6d6REPPHoXlqodQm1gqD4FaLY',
    }
  ],

}

module.exports = USER_CONFIG

