<template>
  <div>
    <el-card>
      <el-table :data="tableData" border stripe >
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="book_Isbn" label="ISBN"></el-table-column>
        <el-table-column prop="book_Name" label="名称"></el-table-column>
        <el-table-column prop="book_Author" label="作者"></el-table-column>
        <el-table-column prop="book_Pub" label="出版社"></el-table-column>

        <el-table-column prop="book_Num" label="是否在书架上">
          <template v-slot="scope">
            <span v-if="scope.row.book_Num == 1">是</span>
            <span v-else>否</span>
          </template>
        </el-table-column>

        <el-table-column prop="bookSort.sort_Name" label="分类"></el-table-column>
        <el-table-column prop="book_Record" label="登记日期"></el-table-column>

        <el-table-column  label="操作" width="180px" >
          <template v-slot="">
            <el-tooltip content="编辑" placement="top" :enterable="false">
              <el-button size="small" type="primary" icon="el-icon-edit"></el-button>
            </el-tooltip>

            <el-tooltip content="编辑" placement="top" :enterable="false">
            <el-button size="small" type="danger" icon="el-icon-share"></el-button>
            </el-tooltip>

              <el-tooltip content="设置" placement="top" :enterable="false">
            <el-button size="small" type="warning" icon="el-icon-delete"></el-button>
              </el-tooltip>
          </template>
        </el-table-column>

      </el-table>
      <!--分页区域-->
      <div class="block">
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[2, 5, 10, 15]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalCount">
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
  import {selectBookInfoAll} from 'network/bookInfo'
  export default {
    name: "BookInfo",
    data() {
      return {
        tableData: [],
        currentPage:null,
        pageSize:null,
        totalCount:null
      }
    },
    methods: {
      selectBookInfoAll(){
        selectBookInfoAll().then(res => {
          // console.log(res);
          const data =res.data.books;
          this.tableData = data.lists;
          this.currentPage = data.pageNum;
          this.pageSize = data.pageSize;
          this.totalCount = data.totalCount;
        })
      },
      // 监听 pageSize 改变的事件
      handleSizeChange(val) {
        console.log(val);
      },
      // 监听 页码值 改变的事件
      handleCurrentChange(val) {
        console.log(val);
      }
    },
    created() {
      this.selectBookInfoAll()
    }
  }
</script>

<style scoped>
  .el-table {
    font-size: 13px;
  }
</style>
