const TaxSlab = require('../models/taxSlabModel');
const PayrollMaster=require('../models/PayrolMasterModel')
const WorkDay=require('../models/workDayModel')
const Attendance = require('../models/attendanceModel')
const OverTime =require("../models/overTimeModel");
const Employee = require('../models/employeeModel');

exports.getAllTaxSlab = async (req, res, next) => {
  try {
    const allTaxSlabs = await TaxSlab.find();
    res.json(allTaxSlabs);
  } catch (error) {
    console.error('Error getting TaxSlabs:', error.message);
    next(error);
  }
};

exports.getTaxSlabById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getTaxSlab = await TaxSlab.findById(id);
    if (!getTaxSlab) {
      res.status(404).json({ error: 'TaxSlab not found.' });
    } else {
      res.json(getTaxSlab);
    }
  } catch (error) {
    console.error('Error getting TaxSlab by ID:', error.message);
    next(error);
  }
};
exports.createTaxSlab = async (req, res, next) => {
  try {
    // Hash the password before storing it in the database
    const newTaxSlab = new TaxSlab({ ...req.body});
    const savedTaxSlab = await newTaxSlab.save();
    res.status(201).json(savedTaxSlab);
  } catch (error) {
    console.error('Error creating TaxSlab:', error.message);
    next(error);
  }};


exports.updateTaxSlab = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedTaxSlab = await TaxSlab.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedTaxSlab) {
      res.status(404).json({ error: 'TaxSlab is not found.' });
    } else {
      res.json(updatedTaxSlab);
    }
  } catch (error) {
    console.error('Error updating TaxSlab:', error.message);
    next(error);
  }
};

// Delete User by ID
exports.deleteTaxSlab = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedTaxSlab = await TaxSlab.findByIdAndDelete(id);
    if (!deletedTaxSlab) {
      res.status(404).json({ error: 'TaxSlab not found.' });
    } else {
      res.json({ message: 'TaxSlab deleted successfully.' });
    }
  } catch (error) {
    console.error('Error deleting TaxSlab:', error.message);
    next(error);
  }
};
// Delete User by ID
exports.payrollInfo = async (req,res, next) => {
   const date=req.query.date;
   const payrollId=req.params.payrollId;

  try {

    let filter = { include: ['employee'], where: { id: payrollId } }
    let d = new Date(date)
    let month = d.getMonth() + 1
    let year = d.getFullYear()
    let days = 0
    if (month == new Date().getMonth() + 1) {
      days = new Date().getDate()
  }
  else {
      if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
          days = 31
      } else if (month == 4 || month == 6 || month == 9 || month == 11) {
          days = 30
      }
      else { days = 28 }
     }
     const slab = await TaxSlab.find( // {include: [{ model: Employee, as: 'employee' },], }
                                       )
    if (slab.length > 0) {
    let workDay= WorkDay.find({  month: d.getMonth() + 1  })
    let totalDays = workDay.length > 0 ? workDay[0].noDays : 30
    let payrol= await PayrollMaster.findById(payrollId).populate('employee')
      let items = []
      let temp = payrol
      items.push({
          date: temp.date,
          fullName: temp.employee.fullName,
          gender: temp.employee.gender,
          joiningDate: temp.employee.joiningDate,
          department: temp.employee.department,
          subDept: temp.employee.subDept,
          salary: temp.employee.salary,
          salaryPerWorkDay: "0",
          grossSalary: "0",
          attBonus: "0",
          dailyRate: (parseFloat(temp.employee.salary) / parseFloat(totalDays)).toFixed(2),
          perHrRate: (parseFloat(temp.employee.salary) / 192).toFixed(2),
          transportPay: temp.employee.transportPay,
          labourUnion: (parseFloat(temp.employee.salary) * 0.01).toFixed(2),
          ironIncentive: temp.employee.ironIncentive,
          pensionDeduction: (parseFloat(temp.employee.salary) * 0.07).toFixed(2),
          pensionContribution: (parseFloat(temp.employee.salary) * 0.11).toFixed(2),
          costSharing: temp.employee.costSharing,
          responseAllow: temp.employee.responseAllow,
          homeAllow: temp.employee.homeAllow,
          incentiveSalary: temp.employee.incentiveSalary,
          taxIncome: "0",
          incomeTaxDeduction: "0",
          absentIncentive: temp.employee.absentIncentive,
          totaWorkDay: totalDays,
          employeeId: temp.employee._id,
          attendance: [],
          workingDays: "0",
          otHr: [],
          otDay: "0",
          otBirr: [],
          otTotalBirr: "0",
          remainingAl: temp.remainingAl,
          miscPayment: temp.miscPayment,
          miscBirr: "0",
          taxDeduction: "0",
          totalDeduction: "0",
          netPayment: "0",
          payback: temp.payback,
          netSalary: "0",
          id: temp._id,
      })

      let value = await Attendance.find({
        employee: temp.employee._id 
           })
           let attendance = []
           let atDate = new Date()
           atDate.setMonth(parseInt(month) - 1)
           for (let i = 1; i <= days; i++) {
               atDate.setDate(i)
               attendance.push({
                   value: atDate.getDay() == "0" ? "P" : "A",
                   slValue: '1',
                   lateMinutes: '0'
               })
             }
           let result=[];
           for(let f=0;f<value.length;f++){
            let dateAtt = new Date(value[f]?.dateAttended)
            let monthAtt = dateAtt?.getMonth() + 1
            let yearAtt = dateAtt?.getFullYear()
            result[{id:"",dateAttended:"",value:"",lateMinutes:"",slValue:"",employee:""}]

            if( monthAtt==month && yearAtt==year){
               
              result.push({id:value[f]?._id,
                dateAttended:value[f]?.dateAttended,
                value:value[f]?.value,
                lateMinutes:value[f]?.lateMinutes,
                slValue:value[f]?.slValue,
                employee:value[f]?.employee?.toString()
            })
            }}

            if (result.length > 0) {
              for (let j = 0; j < result.length; j++) {
                let d = new Date(result[j].dateAttended);
                if (d.getDate() <= days) {
                    attendance[d.getDate() - 1].value = result[j].value;
                    attendance[d.getDate() - 1].slValue = result[j].slValue
                    attendance[d.getDate() - 1].lateMinutes = result[j].lateMinutes
                }
            }
            }
            // const calculateAttendance = function (attendance, items, slab) {
              let totalP = 0
              let totalA = 0
              let totalPr = 0
              let totalDL = 0
              let totalML = 0
              let totalPL = 0
              let totalAL = 0
              let totalMGL = 0
              let totalHLA = 0
              let totalHLPr = 0
              let totalSL = 0
              let totalSpecialL = 0
              let totalLate = 0
              let totalFL = 0
              let workingDays = 0
              for (let i = 0; i < attendance.length; i++) {
                  if (attendance[i].value == "P") {
                      totalP += 1
                      workingDays += 1;
                  }
                  if (attendance[i].value == "A") {
                      totalA += 1
                  }
                  if (attendance[i].value == "Pr") {
                      totalPr += 1
                      workingDays += 1;
                  }
                  if (attendance[i].value == "AL") {
                      totalAL += 1
                      workingDays += 1;
                  }
                  if (attendance[i].value == "MOL") {
                      totalDL += 1
                      workingDays += 1;
                  }
                  if (attendance[i].value == "HLPR") {
                      totalHLPr += 1
                      workingDays += 1;
                  }
                  if (attendance[i].value == "HLA") {
                      totalHLA += 1
                      workingDays += 0.5;
                  }
                  if (attendance[i].value == "MGL") {
                      totalMGL += 1
                      workingDays += 1;
                  }
                  if (attendance[i].value == "ML") {
                      totalML += 1
                      workingDays += 1;
                  }
                  if (attendance[i].value == "PL") {
                      totalPL += 1
                      workingDays += 1;
                  }
                  if (attendance[i].value == "SL") {
                      totalSL += 1
                      workingDays += parseFloat(attendance[i].slValue);
                  }
                  if (attendance[i].value == "LeM") {
                      totalLate += 1
                      workingDays +=1 - (parseFloat(attendance[i].lateMinutes) / 480).toFixed(2);
                  }
                  if (attendance[i].value == "FL") {
                      totalFL += 1
                      workingDays += 1;
                  }
                  if (attendance[i].value == "Special L") {
                      totalSpecialL = 1
                  }
              }
              items[0].attendance = [{
                  totalP: totalP, totalA: totalA, totalPr: totalPr,
                  totalDL: totalDL, totalML: totalML, totalPL: totalPL,
                  totalAL: totalAL, totalMGL: totalMGL,
                  totalHLA: totalHLA, totalHLPr: totalHLPr, totalSL: totalSL,
                  totalSpecialL: totalSpecialL,
                  totalLate: totalLate, totalFL: totalFL,
                  workingDays: workingDays
              }]
              items[0].workingDays = workingDays
              let otHr125 = 0
              let otHr15 = 0
              let otHr20 = 0
              let otHr25 = 0
              let otDays = 0
              // getOvertime(payrollId).then((time) => {
                  let time = await OverTime.find({ })
                  let overTime=[];
                  for(let o=0;o<time.length;o++){
                   let dateAtt = new Date(time[o]?.date)
                   let monthAtt = dateAtt?.getMonth() + 1
                   let yearAtt = dateAtt?.getFullYear()
                   overTime[{id:"",date:"",value:"",type:"",payrol:""}]
       
                   if(monthAtt==month && yearAtt==year){
                    overTime.push({id:time[o]?._id,
                      date:time[o]?.date,
                       value:time[o]?.value,
                       type:time[o]?.type,
                       payrol:time[o]?.payrol?.toString()
                   })
                }
                }

                  if (time.length > 0) {
                      // console.log(time[0].type)
                      for (let j = 0; j < time.length; j++) {
                          // console.log(time[j].type)
                          if (time[j].type == "Normal Day") {
                              otHr125 += parseFloat(time[j].value);
                          }
                          else if (time[j].type == "Night time") {
                              otHr15 += parseFloat(time[j].value)
                          }
                          else if (time[j].type == "Rest Day") {
                              otHr20 += parseFloat(time[j].value);
                          }
                          else if (time[j].type == "Public Holly Day") {
                              otHr25 += parseFloat(time[j].value);
                          }
                          if (time.length - 1 == j) {
                              otDays = (parseFloat(otHr125) + parseFloat(otHr15) + parseFloat(otHr20) + parseFloat(otHr25)) / 8
                          }
                      }
                  }
                  items[0].otHr = [{
                      otHr125: otHr125, otHr15: otHr15,
                      otHr20: otHr20, otHr25: otHr25,
                  }]
                  items[0].otDay = otDays
                  items[0].otBirr = [{
                      otHr125: parseFloat(otHr125) * parseFloat(items[0].perHrRate) * 1.25,
                      otHr15: parseFloat(otHr15) * parseFloat(items[0].perHrRate) * 1.5,
                      otHr20: parseFloat(otHr20) * parseFloat(items[0].perHrRate) * 2,
                      otHr25: parseFloat(otHr25) * parseFloat(items[0].perHrRate) * 2.5,
                      total: ((parseFloat(otHr125) * 1.25 + parseFloat(otHr15) * 1.5 + parseFloat(otHr20) * 2 +
                          parseFloat(otHr25) * 2.5) * parseFloat(items[0].perHrRate)).toFixed(2)
                  }]
                  items[0].otTotalBirr = (parseFloat(otHr125) * 1.25 + parseFloat(otHr15) * 1.5 + parseFloat(otHr20) * 2 +
                      parseFloat(otHr25) * 2.5) * parseFloat(items[0].perHrRate)
                  if (items[0].absentIncentive == "Yes") {
                      items[0].attBonus = days == parseFloat(items[0].workingDays) ? 75 : 0;
                  }
                  
                  // const manageData = function (items, slab) {
                    items[0].salaryPerWorkDay = (parseFloat(items[0].salary) * parseFloat(items[0].workingDays) / parseInt(items[0].totaWorkDay)).toFixed(2)
                    items[0].grossSalary = (parseFloat(items[0].salaryPerWorkDay) +
                        parseFloat(items[0].otTotalBirr) +
                        parseFloat(items[0].attBonus) +
                        parseFloat(items[0].ironIncentive) +
                        parseFloat(items[0].salary) * 0.11 +
                        parseFloat(items[0].responseAllow) +
                        parseFloat(items[0].homeAllow) +
                        parseFloat(items[0].transportPay)).toFixed(2);

                    let repAllow = parseFloat(items[0].responseAllow) > 500 ? parseFloat(items[0].responseAllow) - 500 : 0
                    let homAllow = parseFloat(items[0].homeAllow) - 0.1 * parseFloat(items[0].salaryPerWorkDay) > 0 ?
                                   parseFloat(items[0].homeAllow) - 0.1 * parseFloat(items[0].salaryPerWorkDay) : 0
                                
                       items[0].taxIncome =
                        parseFloat(items[0].salaryPerWorkDay) +
                        parseFloat(items[0].ironIncentive) +
                        parseFloat(items[0].otTotalBirr) +
                        parseFloat(items[0].attBonus) +
                        parseFloat(items[0].incentiveSalary) +
                        parseFloat(items[0].payback) +
                        parseFloat(repAllow);
                    // if (items[0].department != "GM") {
                    //     items[0].taxIncome = parseFloat(items[0].taxIncome) + parseFloat(homAllow)        //Yibe comment
                    // }


                    items[0].taxIncome = parseFloat(items[0].taxIncome).toFixed(2)
                      // Incom tax deduction                  
                    let itPayment=items[0].taxIncome;
                    for (let i = 0; i < slab.length - 1; i++) {
                      if (
                          parseFloat(itPayment) >= parseFloat(slab[i].initial) &&
                          parseFloat(itPayment) <= parseFloat(slab[i].end)
                      ) {
                          let tax = (
                              (parseFloat(slab[i].deduction) * parseFloat(itPayment)) / 100 -
                              parseFloat(slab[i].extraDeduction)
                          );
                          return tax.toFixed(2);
                      }
                  }
                  let lastIT = slab.length - 1;
                  let ITax=0.0;
                  if (parseFloat(itPayment) >= parseFloat(slab[lastIT].initial)) {
                    ITax = (
                          (parseFloat(slab[lastSlab].deduction) * parseFloat(itPayment)) / 100 -
                          parseFloat(slab[lastSlab].extraDeduction)
                      );
                  }
                  items[0].incomeTaxDeduction = ITax.toFixed(2)

                    items[0].totalDeduction = (
                        parseFloat(items[0].salary) * 0.07 +
                        parseFloat(items[0].salary) * 0.11 +
                        (parseFloat(items[0].costSharing) * items[0].salaryPerWorkDay) /100 +
                        parseFloat(items[0].incomeTaxDeduction) +
                        parseFloat(items[0].salaryPerWorkDay) * 0.01
                    ).toFixed(2);
                    items[0].miscBirr = (
                        parseFloat(items[0].dailyRate) * parseFloat(items[0].miscPayment)
                    ).toFixed(2);


                      // get taxDeduction 
                      let payment=items[0].miscBirr;
                    for (let i = 0; i < slab.length - 1; i++) {
                      if (
                          parseFloat(payment) >= parseFloat(slab[i].initial) &&
                          parseFloat(payment) <= parseFloat(slab[i].end)
                      ) {
                          let tax = (
                              (parseFloat(slab[i].deduction) * parseFloat(payment)) / 100 -
                              parseFloat(slab[i].extraDeduction)
                          );
                          return tax.toFixed(2);
                      }
                  }
                  let lastSlab = slab.length - 1;
                  let tax=0.0;
                  if (parseFloat(payment) >= parseFloat(slab[lastSlab].initial)) {
                       tax = (
                          (parseFloat(slab[lastSlab].deduction) * parseFloat(payment)) / 100 -
                          parseFloat(slab[lastSlab].extraDeduction)
                      );
                  }

                  items[0].taxDeduction = tax.toFixed(2)

                    items[0].netPayment = (parseFloat(items[0].miscBirr) - parseFloat(items[0].taxDeduction)).toFixed(2);
                    items[0].netSalary = (items[0].grossSalary - items[0].totalDeduction).toFixed(2);
                    // cb(null, [{ type: "success", item: items[0] }])
                    res.json({item: items[0]});
               // }     
    }
  } catch (error) {
    console.error('Error to get payrollInfo', error.message);
    next(error);
  }
};