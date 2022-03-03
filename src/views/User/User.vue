<template>
  <div class="manage">
    <el-dialog :title="operateType === 'add' ? '新增用户' : '更新用户'" :visible.sync="isShow">
      <common-form :formLabel="operateFormLabel" :form="operateForm" :inline="true" ref="form"></common-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">+ 新增</el-button>
      <common-form :formLabel="formLabel" :form="searchForm" :inline="true" ref="form">
        <el-button type="primary" @click="getList">搜索</el-button>
      </common-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CommonForm from '@/components/CommonForm.vue'
export default {
  name: 'USer',
  components: {
    CommonForm
  },
  data () {
    return {
      operateType: 'add',
      isShow: false,
      operateFormLabel: [
        {
          model: 'name',
          label: '姓名',
          type: 'input'
        },
        {
          model: 'age',
          label: '年龄',
          type: 'input'
        },
        {
          model: 'sex',
          label: '性别',
          type: 'select',
          opts: [
            {
              label: '男',
              value: 1
            },
            {
              label: '女',
              value: 0
            }
          ]
        },
        {
          model: 'birth',
          label: '出生日期',
          type: 'date'
        },
        {
          model: 'addr',
          label: '地址',
          type: 'input'
        }
      ],
      operateForm: {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: ''
      },
      formLabel: [
        {
          model: 'keyword',
          label: '',
          type: 'input'
        }
      ],
      searchForm: {
        keyword: ''
      }
    }
  },
  methods: {
    confirm () {
      if (this.operateType === 'edit') {
        axios.post('./user/edit', this.operateForm).then(res => {
          this.isShow = false
        })
      } else {
        axios.post('./user/add', this.operateForm).then(res => {
          this.isShow = false
        })
      }
    },
    addUser () {
      this.isShow = true
      this.operateType = 'add'
      this.operateForm = {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: ''
      }
    },
    getList () {

    }
  }
}
</script>

<style lang="less" scoped>
  .manage {
    min-height: 100vh;
    .manage-header {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
