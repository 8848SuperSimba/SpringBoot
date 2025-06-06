<template>
  <div class="container">
    <el-alert title="确认支付前请先核对订单信息" type="success" :closable="false"></el-alert>
    <div class="price-content">
      <span>充值金额</span>
      <el-input-number v-model="amount" :min="1" :precision="2" :step="100" style="width: 200px; margin-left: 20px;"></el-input-number>
      <span style="margin-left: 10px;">元</span>
    </div>
    <div class="buton-content">
      <el-button @click="submitTap" type="primary">确认支付</el-button>
      <el-button @click="back()">返回</el-button>
    </div>
  </div>
</template>
<script>
// import { Message } from "element-ui";
export default {
  data() {
    return {
      amount: 100,
      table: "",
      obj: ""
    };
  },
  mounted() {
    let table = this.$storage.get("paytable");
    let obj = this.$storage.getObj("payObject");
    this.table = table;
    this.obj = obj;
  },
  methods: {
    submitTap() {
      if (!this.amount || this.amount <= 0) {
        this.$message.error("请输入有效的充值金额");
        return;
      }
      this.$confirm(`确定支付 ${this.amount} 元?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.obj.ispay = "已支付";
        this.obj.amount = this.amount;
        this.$http({
          url: `${this.table}/update`,
          method: "post",
          data: this.obj
        }).then(({ data }) => {
          if (data && data.code === 0) {
            this.$message({
              message: "支付成功",
              type: "success",
              duration: 1500,
              onClose: () => {
                this.$router.go(-1);
              }
            });
          } else {
            this.$message.error(data.msg);
          }
        });
      });
    },
    back(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  margin: 10px;
  font-size: 14px;
  span {
    width: 60px;
  }
  .price-content {
    display: flex;
    align-items: center;
    margin-top: 20px;
    padding: 20px;
    border-bottom: 1px solid #eeeeee;
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
  .buton-content {
    margin: 20px;
  }
}
</style>
