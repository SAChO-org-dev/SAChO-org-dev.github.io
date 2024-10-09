var posts=["2024/10/09/SAChO2-试卷/","2024/10/09/hello-world/","2024/10/09/SAChO2-答题卡/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };