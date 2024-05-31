const PayrolMaster = require('../models/PayrolMasterModel');
const Employee = require('../models/employeeModel');

exports.getAllPayrolMaster = async (req, res, next) => {
  try {
    const allPayrolMasters = await PayrolMaster.find();
    res.json(allPayrolMasters);
  } catch (error) {
    console.error('Error getting PayrolMasters:', error.message);
    next(error);
  }
};

exports.getPayrolMasterById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getPayrolMaster = await PayrolMaster.findById(id);
    if (!getPayrolMaster) {
      res.status(404).json({ error: 'PayrolMaster not found.' });
    } else {
      res.json(getPayrolMaster);
    }
  } catch (error) {
    console.error('Error getting PayrolMaster by ID:', error.message);
    next(error);
  }
};
exports.createPayrolMaster = async (req, res, next) => {
  try {
    console.log(req.body)
    // Hash the password before storing it in the database
    const newPayrolMaster = new PayrolMaster({ ...req.body});
    const savedPayrolMaster = await newPayrolMaster.save();
    res.status(201).json(savedPayrolMaster);
  } catch (error) {
    console.error('Error creating PayrolMaster:', error.message);
    next(error);
  }};


exports.updatePayrolMaster = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedPayrolMaster = await PayrolMaster.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedPayrolMaster) {
      res.status(404).json({ error: 'PayrolMaster is not found.' });
    } else {
      res.json(updatedPayrolMaster);
    }
  } catch (error) {
    console.error('Error updating PayrolMaster:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deletePayrolMaster = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedPayrolMaster = await PayrolMaster.findByIdAndDelete(id);
    if (!deletedPayrolMaster) {
      res.status(404).json({ error: 'PayrolMaster not found.' });
    } else {
      res.json({ message: 'PayrolMaster deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting PayrolMaster:', error.message);
    next(error);
  }
};
  exports.getFinanceReport = async (req,res, next) => {
  const date = req.query.date;
  try {
      const  Attendance  = require("../models/attendanceModel")
      const  OverTime  = require("../models/overTimeModel")
      const  TaxSlab  = require('../models/taxSlabModel')
      const WorkedDay = require('../models/workDayModel');
      const reportMonth = date.toString().substr(0, 8);
      var data = []
      let salary =6000;
      // const taxSlab = await TaxSlab.find({
      //   where: {
      //     initial: { $lte: salary },
      //     end: { $gte: salary },
      //   },
      // });
    
      // if (taxSlab) {
      //   res.json({ deduction: taxSlab.deduction });
      // } else {
      //   res.status(404).json({ error: 'Tax slab not found' });
      // }
      // const start = new Date(`${reportMonth}-01`);
      // const end = new Date(`${reportMonth}-30`);
      // const workedDay = await WorkedDay.find({
      //   month: {
      //       gte: `${reportMonth}-01`,
      //       lte: `${reportMonth}-30`,
      //     },});
      // let workedDays;
      // try {
      //   workedDays = workedDay.data[0].noDays;
      // } catch (error) {
      //   workedDays = 0;
      // }

      const resPaMa = await PayrolMaster.find(
      //   {  
      //   where: {
      //     date:date 
      //     },
      //     include: [{ model: OverTime, as: 'overtime' }]
      //  }
      );
      for (let p = 0; p < resPaMa.length; p++) {
        // const resEmDe = await getEmployeeDetails(resPaMa[p].employee.toString(),date);
        const resEmDe = await Employee.find(resPaMa[p].employee)

        const idno = resEmDe[0]._id;
        const incentiveSalary = resEmDe[0].incentiveSalary;
        const fullName = resEmDe[0].fullName;
        const positionalAllow = resEmDe[0].positionalAllow;
        const position = resEmDe[0].position;
        const bankAccountNum = resEmDe[0].bankAccountNum;
        const mobileAllow = resEmDe[0].mobileAllow;
        const foodAllow = resEmDe[0].foodAllow;
        const phoneNumber = resEmDe[0].phoneNumber;
        const gender = resEmDe[0].gender;
        const joiningDate = resEmDe[0].joiningDate;
        const department = resEmDe[0].department;
        const subDept = resEmDe[0].subDept;
        const salary = resEmDe[0].salary;
        const pension = salary * 0.07;
        const totalSalary = resEmDe[0].totalSalary;
        const overtime = resEmDe[0].overtime;
        const prfrm = resEmDe[0].prfrm;
        const discipline = resEmDe[0].discipline;
        const quality = resEmDe[0].quality;
        const pay = resEmDe[0].pay;
        const responseAllow = resEmDe[0].responseAllow;
        const homeAllow = resEmDe[0].homeAllow;
        const taxableHomeAllow = resEmDe[0].taxableHomeAllow;
        const nonTaxableHomeAllow = resEmDe[0].nonTaxableHomeAllow;
        const profAllow = resEmDe[0].profAllow;
        const taxableProfAllow = resEmDe[0].taxableProfAllow;
        const nonTaxableProfAllow = resEmDe[0].nonTaxableProfAllow;
        const absentIncentive = resEmDe[0].absentIncentive;
        const transportPay = resEmDe[0].transportPay;
        const costSharing = resEmDe[0].costSharing;
        const ironIncentive = resEmDe[0].ironIncentive;
        const labourContribution = resEmDe[0].labourContribution;
        const womanUnion = resEmDe[0].womanUnion;
        const creditAssociation = resEmDe[0].creditAssociation;
        const medicationDeduction = resEmDe[0].medicationDeduction;
        const userRoleId = resEmDe[0].userRoleId;
        
        let workedDays = 30;
        let workedDay=10
        // for (let a = 0; a < resEmDe[0].attendances.length; a++) {
        //   workedDays += parseFloat(resEmDe[0].attendances[a].slValue);
        // }
    
        const perDaySalary = salary / workedDay;
        const workedSalary = perDaySalary * workedDays;
    
        const payback = resPaMa[p].payback;
        const advancedRecievable = resPaMa[p].advancedRecievable;
        const penality = resPaMa[p].penality;
        const miscPayment = resPaMa[p].miscPayment;
    
        let overTimeDays = 3;
        // for (let o = 0; o < resPaMa[p].overtime.length; o++) {
        //   overTimeDays += parseFloat(resPaMa[p].overtime[o].value);
        // }
    
        const OverTimePayment = perDaySalary * overTimeDays;
        const grossEarning = workedSalary + OverTimePayment + responseAllow + homeAllow + positionalAllow + profAllow + absentIncentive + ironIncentive + foodAllow + mobileAllow + incentiveSalary + miscPayment + payback;
        const taxableEarning = workedSalary + taxableHomeAllow + taxableProfAllow;
        const incomeTax = await TaxSlab.find({
          where: {
            and: [
              { initial: { lte: taxableEarning } },
              { end: { gte: taxableEarning } },
            ],
          },
        }).then(res => ((taxableEarning * res[0].deduction / 100) - res[0].extraDeduction)).catch(err => console.log(err));
    
        const totalDeduction = incomeTax + pension + advancedRecievable + labourContribution + costSharing + penality;
        const netSalary = grossEarning - totalDeduction;
    
        data.push({
          fullName, idno, department, position, salary, responseAllow,
          absentIncentive, homeAllow, taxableHomeAllow, nonTaxableHomeAllow, profAllow, taxableProfAllow,
          nonTaxableProfAllow, positionalAllow, foodAllow, mobileAllow, incentiveSalary,
          labourContribution, womanUnion, creditAssociation, costSharing, workedDays,
          perDaySalary, workedSalary, overTimeDays, payback, advancedRecievable, penality,
          miscPayment, pension, incomeTax, taxableEarning, medicationDeduction, grossEarning,
          profAllow, homeAllow, netSalary, ironIncentive, bankAccountNum, totalDeduction
        });
      }
     res.json(data);
  } catch (error) {
    console.log(error)
    // res.status(500).json({ error: error.message });
  }
};


exports.summarySheet= async (req, res, next) => {
  const date=req.query.date;
  try {
    let da = new Date(date)
    // let d = da.getFullYear() + "-" + (da.getMonth() + 1)//.toISOString().substr(0, 7)
    let noOfSundays = 0
    // let filter = {include: [{ model: Employee, as: 'employee' } ]}
    let month = da.getMonth() + 1
    let year = da.getFullYear()
    let days = 0
    const Attendance  = require("../models/attendanceModel")
    const OverTime  = require("../models/overTimeModel")
    const TaxSlab = require("../models/taxSlabModel") 
    if (month == new Date().getMonth() + 1) 
      {
        days = new Date().getDate()
      } 
      else {
        if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
          days = 31
          } 
          else if (month == 4 || month == 6 || month == 9 || month == 11) {
          days = 30
         } 
        else {
          days = 28
        }
      }
      for (let j = 1; j <= days; j++) {
        let currentMonth = new Date()
        currentMonth.setMonth(parseInt(month) - 1)
        currentMonth.setDate(j)
        currentMonth.getDay() == 0 ? (noOfSundays += 1) : 'A'
      }
      const payrol = await PayrolMaster.find( // {include: [{ model: Employee, as: 'employee' },], }
                                             )

      // const getAttendance = async(empId)=> {
      //   let value = await Attendance.find({
      //     // employee: empId 
      //        })
      //        let attendanceData=[];
      //        for(i=0;i<=value.length;i++){
      //         let dateAtt = new Date(value[i]?.dateAttended)
      //         let monthAtt = dateAtt?.getMonth() + 1
      //         let yearAtt = dateAtt?.getFullYear()
      //         attendanceData[{id:"",dateAttended:"",value:"",lateMinutes:"",slValue:"",employee:""}]

      //         if(value[i]?.employee.toString()==empId.toString() && monthAtt==month && yearAtt==year){
                 
      //           attendanceData.push({id:value[i]?._id,
      //             dateAttended:value[i]?.dateAttended,
      //             value:value[i]?.value,
      //             lateMinutes:value[i]?.lateMinutes,
      //             slValue:value[i]?.slValue,
      //             employee:value[i]?.employee.toString()
      //         })

      //         }
      //        }
      //   return(attendanceData)
      // }

      const getOvertime = async (payrollId)=> {
        let f = {
          where: { payrollId: payrollId, month: month, year: year },
        }
        let ot = await OverTime.find(f)
        return(ot)
      }
      let workingDays = []
      if (payrol.length > 0) {
        const slab =await TaxSlab.find()
          for (let i = 0; i < payrol.length; i++) {
            workingDays[i] = noOfSundays
            // let attendance = getAttendance(payrol[i].employee._id)
            let value = await Attendance.find({
              // employee: empId 
                 })
                 let attendance=[];
                 for(let f=0;f<value.length;f++){
                  let dateAtt = new Date(value[f]?.dateAttended)
                  let monthAtt = dateAtt?.getMonth() + 1
                  let yearAtt = dateAtt?.getFullYear()
                  attendance[{id:"",dateAttended:"",value:"",lateMinutes:"",slValue:"",employee:""}]
    
                  if(value[f]?.employee.toString()==payrol[i].employee._id.toString() && monthAtt==month && yearAtt==year){
                     
                    attendance.push({id:value[f]?._id,
                      dateAttended:value[f]?.dateAttended,
                      value:value[f]?.value,
                      lateMinutes:value[f]?.lateMinutes,
                      slValue:value[f]?.slValue,
                      employee:value[f]?.employee.toString()
                  })
                  }
                 }

                if (attendance.length > 0) {
                  // if (i == 0) {
                  // console.log(result.length)
                  // }
                  for (let j = 0; j < attendance.length; j++) {
                    if (attendance[j].value == 'P') {
                      workingDays[i] += 1
                    }
                    if (attendance[j].value == 'Pr') {
                      workingDays[i] += 1
                    }
                    if (attendance[j].value == 'AL') {
                      workingDays[i] += 1
                    }
                    if (attendance[j].value == 'MOL') {
                      workingDays[i] += 1
                    }
                    if (attendance[j].value == 'HLPR') {
                      workingDays[i] += 1
                    }
                    if (attendance[j].value == 'HLA') {
                      workingDays[i] += 0.5
                    }
                    if (attendance[j].value == 'MGL') {
                      workingDays[i] += 1
                    }
                    if (attendance[j].value == 'ML') {
                      workingDays[i] += 1
                    }
                    if (attendance[j].value == 'PL') {
                      workingDays[i] += 1
                    }
                    if (attendance[j].value == 'SL') {
                      workingDays[i] += parseFloat(attendance[j].slValue)
                    }
                    if (attendance[j].value == 'LeM') {
                      workingDays[i] +=1 -(parseFloat(attendance[j].lateMinutes) / 480).toFixed(2)
                    }
                    if (attendance[j].value == 'FL') {
                      workingDays[i] += 1
                    }
                  }
                }

                // if (i == res.length - 1) {
                  // console.log(res, workingDays, slab)

                  // const manageData = async (res, workingDays, slab)=>{
                    let otHr125 = []
                    let otHr15 = []
                    let otHr20 = []
                    let otHr25 = []
                    let otBirr = []
                    for (let i = 0; i < payrol.length; i++) {
                      otHr125[i] = 0
                      otHr15[i] = 0
                      otHr20[i] = 0
                      otHr25[i] = 0
                      otBirr[i] = 0
                      let overtime= getOvertime(payrol[i].id)
                          if (overtime.length > 0) {
                            // console.log(time[0].type)
                            for (let j = 0; j < time.length; j++) {
                              if (overtime[j].type == 'Normal Day') {
                                otHr125[i] += parseFloat(overtime[j].value)
                              } else if (overtime[i].type == 'Night time') {
                                otHr15[i] += parseFloat(overtime[j].value)
                              } else if (overtime[j].type == 'Rest Day') {
                                otHr20[i] += parseFloat(overtime[j].value)
                              } else if (overtime[j].type == 'Public Holly Day') {
                                otHr25[i] += parseFloat(overtime[j].value)
                              }
                              if (overtime.length - 1 == j) {
                                otBirr[i] =
                                  (parseFloat(otHr125[i]) * parseFloat(payrol[i].employee.salary) * 1.25) /192 +
                                  (parseFloat(otHr15[i]) * parseFloat(payrol[i].employee.salary) *1.5) /192 +
                                  (parseFloat(otHr20[i]) * parseFloat(payrol[i].employee.salary) * 2.0) /192 +
                                  (parseFloat(otHr25[i]) * parseFloat(payrol[i].employee.salary) * 2.5) /192
                                // otDays[i] = (parseFloat(otHr125[i]) + parseFloat(otHr15[i]) + parseFloat(otHr20[i]) + parseFloat(otHr25[i])) / 8
                              }
                            }
                          }
                          // if (i == item.length - 1) {
                            // const asignToTable = async (
                            //   item,
                            //   workingDays,
                            //   otHr125,
                            //   otHr15,
                            //   otHr20,
                            //   otHr25,
                            //   otBirr,
                            //   slab,
                            // )=>{
                              // cb(null, [workingDays, otBirr, otDays, slab, item])
                              let totalWorkDays = 30
                              let tableValue = []
                              for (let i = 0; i < payrol.length; i++) {
                                //worked salary==========================
                                let workedSalary = (parseFloat(workingDays[i] * parseFloat(payrol[i].employee.salary)) /
                                 parseFloat(totalWorkDays)).toFixed(2)
                      
                                //per day salary====================================
                                // otHr125=parseFloat(otHr125[i]);
                                // otHr15=parseFloat(otHr15[i]);
                                // otHr20=parseFloat(otHr20[i]);
                                // otHr25=parseFloat(otHr25[i]);
                                let perDaySalary = (
                                  parseFloat(payrol[i].employee.salary) /
                                  parseFloat(totalWorkDays)
                                ).toFixed(2)
                                //misc payment==========================================
                                let miscPayment = (
                                  parseFloat(payrol[i].miscPayment) * parseFloat(perDaySalary)
                                ).toFixed(2)
                      
                                //taxableEarning======================================
                                let taxableEarning = (
                                  parseFloat(workedSalary) +
                                  parseFloat(payrol[i].employee.taxableHomeAllow) +
                                  parseFloat(payrol[i].employee.taxableProfAllow)
                                ).toFixed(2)
                                //income tax=========================================================
                                let incomeTax = 0 //taxSlab(slab, taxableEarning);
                                for (let i = 0; i < slab.length - 1; i++) {
                                  if (
                                    taxableEarning >= parseFloat(slab[i].initial) &&
                                    taxableEarning <= parseFloat(slab[i].end)
                                  ) {
                                    let tax =
                                      (parseFloat(slab[i].deduction) * taxableEarning) / 100 -
                                      parseFloat(slab[i].extraDeduction)
                                    incomeTax = tax.toFixed(2)
                                  }
                                }
                                let lastSlab = slab.length - 1
                      
                                if (taxableEarning >= parseFloat(slab[lastSlab].initial)) {
                                  let tax =
                                    (parseFloat(slab[lastSlab].deduction) * taxableEarning) / 100 -
                                    parseFloat(slab[lastSlab].extraDeduction)
                                  incomeTax = tax.toFixed(2)
                                }
                                //total Diduction=========================================
                      
                                let salaryPerWorkDay = (
                                  (parseFloat(workingDays[i]) *
                                    parseFloat(payrol[i].employee.salary)) /
                                  parseInt(totalWorkDays)
                                ).toFixed(2)
                      
                                let totalDeduction = (
                                  parseFloat(payrol[i].employee.salary) * 0.07 +
                                  parseFloat(payrol[i].employee.salary) * 0.11 +
                                  (parseFloat(payrol[i].employee.costSharing) *
                                    parseFloat(salaryPerWorkDay)) /
                                    100 +
                                  parseFloat(incomeTax) +
                                  parseFloat(salaryPerWorkDay) * 0.01
                                ).toFixed(2)
                      
                                let grossSalary = 0 //   //Gross Earning============================================
                                if (payrol[i].employee.department == 'Supervisor') {
                                  grossSalary = (
                                    parseFloat(this.salaryPerWorkDay) + parseFloat(this.otBirr[i])
                                  ).toFixed(2)
                                } else {
                                  grossSalary = (
                                    parseFloat(salaryPerWorkDay) +
                                    parseFloat(otBirr[i]) +
                                    parseFloat(workingDays[i]) +
                                    parseFloat(payrol[i].employee.ironIncentive) +
                                    parseFloat(payrol[i].employee.salary) * 0.11 +
                                    parseFloat(payrol[i].employee.responseAllow) +
                                    parseFloat(payrol[i].employee.homeAllow) +
                                    parseFloat(payrol[i].employee.transportPay)
                                  ).toFixed(2)
                                }
                      
                                let netSalary = (
                                  parseFloat(grossSalary) - parseFloat(totalDeduction)
                                ).toFixed(2)
                      
                                netSalary = parseFloat(netSalary) > 0 ? parseFloat(netSalary) : 0
                      
                                let netPay = (grossSalary - totalDeduction).toFixed(2)
                                tableValue.push({
                                  idno: payrol[i].employee.idno,
                                  id: payrol[i].employee.id,
                                  fullName: payrol[i].employee.fullName,
                                  department: payrol[i].employee.department,
                                  subDept: payrol[i].employee.subDept,
                                  salary: payrol[i].employee.salary,
                                  ironIncentive: payrol[i].employee.ironIncentive,
                                  miscPayment: miscPayment,
                                  incentive: payrol[i].employee.incentiveSalary,
                                  transportPay: payrol[i].employee.transportPay,
                                  costSharing: (
                                    (parseFloat(payrol[i].employee.costSharing) / 100) *
                                    parseFloat(payrol[i].employee.salary)
                                  ).toFixed(2),
                      
                                  otHr125: otHr125[i],
                                  otHr15: otHr15[i],
                                  otHr20: otHr20[i],
                                  otHr25: otHr25[i],
                                  otBirr: otBirr[i],
                                  absentIncentive: payrol[i].employee.absentIncentive,
                                  absent: 0,
                                  incomeTax: incomeTax,
                                  pensionContribution: (
                                    parseFloat(payrol[i].employee.salary) * 0.07
                                  ).toFixed(2),
                                  pensionDeduction: (
                                    parseFloat(payrol[i].employee.salary) * 0.11
                                  ).toFixed(2),
                                  payback: payrol[i].payback,
                                  totalDeduction: totalDeduction,
                                  grossSalary: grossSalary,
                                  netPay: netPay > 0 ? netPay : 0,
                                  sign: '',
                                  netSalary: netSalary,
                                })
                                if (tableValue.length == payrol.length) {
                                  res.json(tableValue);
                                }
                              }
                            // }
                          // }     
                    }
                 //}            
                // }
          }
      } else {
        console.log("No payrol data")
      }
  } catch (error) {
    next(error);
  }
};
// exports.financereport = async (req, res, next) => {

// };