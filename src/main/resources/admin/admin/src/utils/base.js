const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootyf10w/",
            name: "springbootyf10w",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootyf10w/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "二手交易"
        } 
    }
}
export default base
