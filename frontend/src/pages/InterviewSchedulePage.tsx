// frontend/src/pages/InterviewSchedulePage.tsx

import React, { useState, useCallback } from 'react';
import { View } from 'react-big-calendar';
import dayjs from 'dayjs';
import { useInterviewSchedule } from '../hooks/useInterviewSchedule';
import { ScheduleHeader } from '../components/interviewschedule/ScheduleHeader';
import { ScheduleCalendar } from '../components/interviewschedule/ScheduleCalendar';
import { ScheduleList } from '../components/interviewschedule/ScheduleList';
import { InterviewFormModal } from '../components/interviewschedule/InterviewFormModal';
import { CalendarErrorBoundary } from '../components/interviewschedule/CalendarErrorBoundary';
import ConfirmDialog from '../components/ConfirmDialog';
import { useToast } from '../components/Toast';
import type { InterviewSchedule, InterviewFormData, InterviewStatus } from '../types/interviewSchedule';

export const InterviewSchedulePage: React.FC = () => {
  const { showToast } = useToast();
  const {
    interviews,
    loading,
    error,
    createInterview,
    updateInterview,
    deleteInterview,
    updateStatus,
  } = useInterviewSchedule();

  const [view, setView] = useState<'day' | 'week' | 'month' | 'list'>('week');
  const [date, setDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [selectedInterview, setSelectedInterview] = useState<InterviewSchedule | null>(null);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [interviewToDelete, setInterviewToDelete] = useState<number | null>(null);

  const handleAddClick = useCallback(() => {
    setModalMode('create');
    setSelectedInterview(null);
    setIsModalOpen(true);
  }, []);

  const handleEditClick = useCallback((interview: InterviewSchedule) => {
    setModalMode('edit');
    setSelectedInterview(interview);
    setIsModalOpen(true);
  }, []);

  const handleDeleteClick = useCallback((id: number) => {
    setInterviewToDelete(id);
    setIsDeleteConfirmOpen(true);
  }, []);

  const handleConfirmDelete = useCallback(async () => {
    if (interviewToDelete) {
      await deleteInterview(interviewToDelete);
      setInterviewToDelete(null);
    }
    setIsDeleteConfirmOpen(false);
  }, [interviewToDelete, deleteInterview]);

  const handleStatusChange = useCallback(async (id: number, status: InterviewStatus) => {
    await updateStatus(id, status);
  }, [updateStatus]);

  const handleEventDrop = useCallback(async (data: { event: any; start: Date | string; end: Date | string }) => {
    // Update interview time when dragged
    const interview = interviews.find(i => i.id === data.event.id);
    if (interview) {
      try {
        const startDate = typeof data.start === 'string' ? new Date(data.start) : data.start;
        await updateInterview(data.event.id, {
          companyName: interview.companyName,
          position: interview.position,
          interviewTime: dayjs(startDate).format('YYYY-MM-DDTHH:mm:ss'),
          interviewType: interview.interviewType,
          meetingLink: interview.meetingLink,
          roundNumber: interview.roundNumber,
          interviewer: interview.interviewer,
          notes: interview.notes,
        });
      } catch (error) {
        console.error('Failed to update interview time:', error);
        showToast('更新面试时间失败，请重试', 'error');
      }
    }
  }, [interviews, updateInterview]);

  const handleEventResize = useCallback(async (data: { event: any; start: Date | string; end: Date | string }) => {
    // Update interview duration when resized
    const interview = interviews.find(i => i.id === data.event.id);
    if (interview) {
      try {
        const startDate = typeof data.start === 'string' ? new Date(data.start) : data.start;
        await updateInterview(data.event.id, {
          companyName: interview.companyName,
          position: interview.position,
          interviewTime: dayjs(startDate).format('YYYY-MM-DDTHH:mm:ss'),
          interviewType: interview.interviewType,
          meetingLink: interview.meetingLink,
          roundNumber: interview.roundNumber,
          interviewer: interview.interviewer,
          notes: interview.notes,
        });
      } catch (error) {
        console.error('Failed to update interview duration:', error);
        showToast('更新面试时长失败，请重试', 'error');
      }
    }
  }, [interviews, updateInterview]);

  const handleFormSubmit = useCallback(async (data: InterviewFormData) => {
    if (modalMode === 'create') {
      await createInterview(data);
    } else if (selectedInterview) {
      await updateInterview(selectedInterview.id, data);
    }
    setIsModalOpen(false);
    setSelectedInterview(null);
  }, [modalMode, selectedInterview, createInterview, updateInterview]);

  // 注：react-big-calendar 该版本不支持拖拽/缩放，onEventDrop/onEventResize 直接保存；无批量确认逻辑

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-10 h-10 border-3 border-slate-200 border-t-primary-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <ScheduleHeader
        view={view}
        onViewChange={setView}
        date={date}
        onDateChange={setDate}
        onAddClick={handleAddClick}
      />

      {view === 'list' ? (
        <ScheduleList
          interviews={interviews}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
          onStatusChange={handleStatusChange}
        />
      ) : (
        <CalendarErrorBoundary>
          <ScheduleCalendar
            interviews={interviews}
            onSelectEvent={handleEditClick}
            view={view as View}
            onViewChange={(v) => setView(v as 'day' | 'week' | 'month')}
            date={date}
            onDateChange={setDate}
            onEventDrop={handleEventDrop}
            onEventResize={handleEventResize}
          />
        </CalendarErrorBoundary>
      )}

      <InterviewFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedInterview(null);
        }}
        onSubmit={handleFormSubmit}
        onDelete={(id) => {
          setIsModalOpen(false);
          setSelectedInterview(null);
          handleDeleteClick(id);
        }}
        initialData={selectedInterview || undefined}
        mode={modalMode}
      />

      <ConfirmDialog
        open={isDeleteConfirmOpen}
        title="确认删除"
        message="确定要删除这个面试吗?此操作无法撤销。"
        onConfirm={handleConfirmDelete}
        onCancel={() => {
          setIsDeleteConfirmOpen(false);
          setInterviewToDelete(null);
        }}
      />
    </div>
  );
};

export default InterviewSchedulePage;
